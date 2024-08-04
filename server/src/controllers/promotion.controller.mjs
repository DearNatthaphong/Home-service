import connectionPool from "../utils/db.mjs";

export const postPromotion = async (req, res) => {
  const newPromotion = {
    ...req.body,
    promotion_code: req.body.isPromotionCode,
    discount:
      req.body.isType === "fixed" ? req.body.isNumFixed : req.body.isNumPercent,
    discount_type: req.body.isType,
    usage_limit: req.body.isUsageLimit,
    expiry_date: req.body.isExpiryDate,
    expiry_time: req.body.isExpiryTime,
    create_at: new Date(),
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
        newPromotion.expiry_time,
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
        message: "ข้อมูลไม่ครบหรือไม่ถูกต้อง",
      });
    } else {
      return res.status(500).json({
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
      });
    }
  }
  return res.status(201).json({
    message: "สร้าง Promotion สำเร็จ",
  });
};
