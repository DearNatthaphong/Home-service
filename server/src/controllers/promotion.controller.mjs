import connectionPool from '../utils/db.mjs';

export const getPromotion = async (req, res) => {
  const { promotionCode } = req.query;
  const userId = req.user.id;

  try {
    // เชค code ว่ามีอยู่และ หมดอายุแล้วรึป่าว
    const promotionResult = await connectionPool.query(
      `
        SELECT 
            promotion_id,
            promotion_code,
            discount,
            discount_type,
            usage_limit
        FROM 
            promotions
        WHERE 
            promotion_code = $1 
            AND expiry_date >= current_date`,
      [promotionCode]
    );

    if (promotionResult.rows.length === 0) {
      return res
        .status(400)
        .json({ message: 'รหัสโปรโมชันหมดอายุหรือไม่ถูกต้อง' });
    }

    const promotion = promotionResult.rows[0];

    // เชคว่า การใช้งานมีการใช้งานเกินลิมิตรึป่าว
    const usageResult = await connectionPool.query(
      `
        SELECT 
            COUNT(*) AS usage_count
        FROM 
            promotion_usages 
        WHERE 
            promotion_id = $1 
            AND user_id = $2`,
      [promotion.promotion_id, userId]
    );

    const usageCount = parseInt(usageResult.rows[0].usage_count, 10);

    if (usageCount >= promotion.usage_limit) {
      return res
        .status(400)
        .json({ message: 'การใช้งานโปรโมชั่นเกินลิมิตแล้ว' });
    }

    const promotionData = {
      promotionId: promotion.promotion_id,
      promotionCode: promotion.promotion_code,
      discount: promotion.discount,
      discountType: promotion.discount_type
    };

    return res.status(200).json(promotionData);
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const updateTotalPrice = async (req, res) => {
  const { orderId, promotionId } = req.params;

  try {
    const promotionResult = await connectionPool.query(
      `SELECT * FROM promotions WHERE promotion_id = $1`,
      [promotionId]
    );

    if (promotionResult.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบโปรโมชั่น' });
    }

    const promotion = promotionResult.rows[0];

    const orderResult = await connectionPool.query(
      `SELECT * FROM orders WHERE order_id = $1`,
      [orderId]
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซื้อ' });
    }

    const order = orderResult.rows[0];

    let newTotalPrice;
    if (promotion.discount_type === 'fixed') {
      newTotalPrice = order.total_price - promotion.discount;
    } else {
      newTotalPrice = (order.total_price * (100 - promotion.discount)) / 100;
    }

    if (newTotalPrice < 0) {
      newTotalPrice = 0;
    }

    const updateResult = await connectionPool.query(
      `UPDATE orders SET total_price = $1 WHERE order_id = $2 RETURNING total_price`,
      [newTotalPrice, order.order_id]
    );

    if (updateResult.rows.length === 0) {
      return res.status(400).json({ message: 'ปรับปรุงคำสั่งซื้อไม่สำเร็จ' });
    }

    return res.status(200).json({
      message: 'ปรับปรุงยอดเงินสุทธิสำเร็จ',
      totalPrice: updateResult.rows[0].total_price
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const createPromotionUsage = async (req, res) => {
  const { orderId, promotionId } = req.params;
  const userId = req.user.id;

  if (!orderId || !promotionId) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }

  try {
    // ตรวจสอบว่าโปรโมชั่นมีอยู่จริงและยังใช้งานได้
    const promotion = await connectionPool.query(
      'SELECT * FROM promotions WHERE promotion_id = $1',
      [promotionId]
    );
    if (!promotion.rows.length) {
      return res.status(404).json({ message: 'ไม่พบโปรโมชั่น' });
    }

    // ตรวจสอบว่า order มีอยู่จริง
    const order = await connectionPool.query(
      'SELECT * FROM orders WHERE order_id = $1',
      [orderId]
    );
    if (!order.rows.length) {
      return res.status(404).json({ message: 'ไม่พบ order' });
    }

    // ตรวจสอบว่า order นี้เคยใช้โปรโมชั่นไปแล้วหรือไม่
    const existingUsage = await connectionPool.query(
      'SELECT * FROM promotion_usages WHERE order_id = $1',
      [orderId]
    );

    if (existingUsage.rows.length > 0) {
      return res
        .status(400)
        .json({ message: 'คำสั่งซ่อมนี้เคยใช้โปรโมชั่นไปแล้ว' });
    }

    // บันทึกการใช้งานโปรโมชั่น
    await connectionPool.query(
      `INSERT INTO promotion_usages (promotion_id, order_id, user_id) VALUES ($1, $2, $3)`,
      [promotionId, orderId, userId]
    );

    return res.status(201).json({
      message: 'สร้างการใช้งานโปรโมชั่นสำเร็จ'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

/** POST Promotion Start */
export const postPromotion = async (req, res) => {
  const newPromotion = {
    ...req.body,
    promotion_code: req.body.isPromotionCode,
    discount:
      req.body.isType === 'fixed' ? req.body.isNumFixed : req.body.isNumPercent,
    discount_type: req.body.isType,
    usage_limit: req.body.isUsageLimit,
    expiry_date: req.body.isExpiryDate,
    expiry_time: req.body.isExpiryTime,
    create_at: new Date(),
    updated_at: new Date()
  };
  console.log(newPromotion);
  try {
    await connectionPool.query(
      `insert into promotions (promotion_code, discount, discount_type, usage_limit, expiry_date, expiry_time) 
      values ($1,$2,$3,$4,$5,$6)`,
      [
        newPromotion.promotion_code,
        newPromotion.discount,
        newPromotion.discount_type,
        newPromotion.usage_limit,
        newPromotion.expiry_date,
        newPromotion.expiry_time
      ]
    );
  } catch (error) {
    console.log(error);
    if (
      !newPromotion.promotion_code ||
      !newPromotion.discount ||
      !newPromotion.discount_type ||
      !newPromotion.usage_limit ||
      !newPromotion.expiry_date ||
      !newPromotion.expiry_time
    ) {
      return res.status(400).json({
        message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง'
      });
    } else {
      return res.status(500).json({
        message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์'
      });
    }
  }
  return res.status(201).json({
    message: 'สร้างโปรโมชั่นโค้ดสำเร็จ'
  });
};
/** POST Promotion End */

/** GET All Promotion Start */
export const getAllPromotion = async (req, res) => {
  let results;
  try {
    results = await connectionPool.query(
      `select * from promotions order by updated_at desc`
    );
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
  return res.status(200).json({
    message: 'ดึงข้อมูลโปรโมชั่นโค้ดสำเร็จ',
    data: results.rows
  });
};
/** GET All Promotion End */

/** GET Promotion By ID Start */
export const getPromotionById = async (req, res) => {
  let results;
  const promotionIdFromAdmin = req.params.id;
  try {
    results = await connectionPool.query(
      `select * from promotions where promotion_id = $1`,
      [promotionIdFromAdmin]
    );
    if (!results.rows[0]) {
      return res.status(404).json({
        message: 'ไม่พบโปรโมชั่นโค้ด'
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
  return res.status(200).json({
    message: 'ดึงข้อมูลโปรโมชั่นโค้ดสำเร็จ',
    data: results.rows
  });
};
/** GET Promotion By ID End */

/** PUT Promotion By ID Start */
export const putPromotionById = async (req, res) => {
  let results;
  const promotionIdFromAdmin = req.params.id;
  const updatedPromotion = {
    ...req.body,
    updated_at: new Date()
  };
  console.log('HEe');
  console.log(req.body);
  try {
    results = await connectionPool.query(
      `select * from promotions where promotion_id = $1`,
      [promotionIdFromAdmin]
    );
    if (!results.rows[0]) {
      return res.status(404).json({
        message: 'ไม่พบโปรโมชั่นโค้ด'
      });
    }
    await connectionPool.query(
      `update promotions 
      set promotion_code = $2, discount = $3, discount_type = $4,
      usage_limit = $5, expiry_date = $6, expiry_time = $7, updated_at = $8
      where promotion_id = $1`,
      [
        promotionIdFromAdmin,
        updatedPromotion.promotion_code,
        updatedPromotion.discount,
        updatedPromotion.discount_type,
        updatedPromotion.usage_limit,
        updatedPromotion.expiry_date,
        updatedPromotion.expiry_time,
        updatedPromotion.updated_at
      ]
    );
  } catch (error) {
    console.log(error);
    if (
      !updatedPromotion.promotion_code ||
      !updatedPromotion.discount ||
      !updatedPromotion.discount_type ||
      !updatedPromotion.usage_limit ||
      !updatedPromotion.expiry_date ||
      !updatedPromotion.expiry_time
    ) {
      return res.status(400).json({
        message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง'
      });
    } else {
      return res.status(500).json({
        message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์'
      });
    }
  }
  return res.status(200).json({
    message: 'อัพเดตข้อมูลโปรโมชั่นโค้ดสำเร็จ',
    data: updatedPromotion
  });
};
/** PUT Promotion By ID End */

/** DELETE Promotion By ID Start */
export const deletePromotionById = async (req, res) => {
  let results;
  const promotionIdFromAdmin = req.params.id;
  try {
    // results = await connectionPool.query(
    //   `select * from promotions where promotion_id = $1`,
    //   [promotionIdFromAdmin]
    // );
    results = await connectionPool.query(
      `delete from promotions where promotion_id = $1`,
      [promotionIdFromAdmin]
    );
    if (!results.rowCount) {
      return res.status(404).json({
        message: 'ไม่พบโปรโมชั่นโค้ด'
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
  return res.status(200).json({
    message: 'ลบข้อมูลโปรโมชั่นโค้ดสำเร็จ'
  });
};
/** DELETE Promotion By ID End */
