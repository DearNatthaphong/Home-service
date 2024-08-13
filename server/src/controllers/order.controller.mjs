import connectionPool from '../utils/db.mjs';
import generateOrderNumber from '../utils/generate.order.mjs';

export const getOrderByQuerry = async (req, res) => {
  const { firstActionStatus, secondActionStatus } = req.query;
  const userId = req.user.id;
  // const userId = req.user && req.user.id;
  console.log('User ID:', userId);
  let results;

  try {
    console.log('firstActionStatus:', firstActionStatus);
    console.log('secondActionStatus:', secondActionStatus);
    console.log('userId:', userId);
    if (
      firstActionStatus === 'รอดำเนินการ' &&
      secondActionStatus === 'กำลังดำเนินการ'
    ) {
      results = await connectionPool.query(
        `SELECT
        orders.order_number,
        orders.total_price,
        orders.action_status,
        order_items.order_item_id,
        order_items.quantity,
        service_items.service_item_name
        FROM orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN service_items ON order_items.service_item_id = service_items.service_item_id
         WHERE (orders.action_status = $1 OR orders.action_status = $2) AND orders.user_id = $3`,
        ['รอดำเนินการ', 'กำลังดำเนินการ', userId]
      );
    }
    if (firstActionStatus === 'ดำเนินการสำเร็จ') {
      results = await connectionPool.query(
        `SELECT
        orders.order_number,
        orders.total_price,
        orders.action_status,
        order_items.order_item_id,
        order_items.quantity,
        service_items.service_item_name
        FROM orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN service_items ON order_items.service_item_id = service_items.service_item_id
        WHERE orders.action_status = $1 AND orders.user_id = $2`,
        ['ดำเนินการสำเร็จ', userId]
      );
    }
    console.log('results', results);
    if (results.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่พบคำสั่งซ่อมในคำขอ'
      });
    }
    // const resultsData = {
    //   order_number: results.rows[0].order_number,
    //   items: results.rows.map((row) => ({
    //     order_item_id: row.order_item_id,
    //     service_name: row.service_name,
    //     quantity: row.quantity,
    //     status_title: row.status_title,
    //   })),
    //   total_price: results.rows[0].total_price,
    // };

    return res.status(200).json({
      message: 'ดึงข้อมูลคำสั่งซื้อสำเร็จ',
      data: results.rows
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};

export const createOrder = async (req, res) => {
  const userId = req.user.id;
  const orderNumber = generateOrderNumber();
  const { totalPrice } = req.body;

  // Validate that totalPrice is provided
  if (!totalPrice) {
    return res.status(400).json({
      message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง'
    });
  }

  try {
    const results = await connectionPool.query(
      `INSERT INTO orders (user_id, order_number, total_price)
       VALUES ($1, $2, $3) RETURNING order_id`,
      [userId, orderNumber, totalPrice]
    );

    // Check if the order was successfully created
    if (results.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่สามารถสร้างคำสั่งซ่อมได้'
      });
    }

    const orderId = results.rows[0].order_id;

    return res.status(201).json({
      message: 'สร้างคำสั่งซ่อมสำเร็จ',
      orderId
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};

export const createOrderItems = async (req, res) => {
  const { orderId } = req.params;
  const { orderItems } = req.body;

  // Validate request body
  if (!orderId || !Array.isArray(orderItems) || orderItems.length === 0) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }

  try {
    // Insert each order item
    for (const item of orderItems) {
      if (!item.serviceItemId || !item.quantity) {
        return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
      }

      await connectionPool.query(
        `INSERT INTO order_items (order_id, service_item_id, quantity)
         VALUES ($1, $2, $3)`,
        [orderId, item.serviceItemId, item.quantity]
      );
    }

    res.status(201).json({
      message: 'สร้างคำสั่งซ่อมสำเร็จ'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์' });
  }
};

export const fetchAllOrderItems = async (req, res) => {
  const { orderId } = req.params;

  try {
    const results = await connectionPool.query(
      `SELECT 
      s.service_name,
      s.service_image,
      o.total_price,
      oi.order_item_id,
      oi.quantity,
      si.service_item_name
      FROM orders AS o
      INNER JOIN order_items AS oi on o.order_id = oi.order_id
      INNER JOIN service_items AS si on oi.service_item_id = si.service_item_id
      INNER JOIN services AS s on s.service_id = si.service_id
      WHERE o.order_id = $1 `,
      [orderId]
    );

    if (results.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่พบรายการซ่อม'
      });
    }

    const formattedResponse = {
      serviceName: results.rows[0].service_name,
      serviceImage: results.rows[0].service_image,
      totalPrice: results.rows[0].total_price,
      orderItems: results.rows.map((item) => ({
        orderItemId: item.service_item_id,
        serviceItemName: item.service_item_name,
        quantity: item.quantity
      }))
    };
    return res.status(200).json(formattedResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};

export const createAppointment = async (req, res) => {
  const userId = req.user.id;
  const { orderId } = req.params;

  const { serviceDate, serviceTime, province, district, subdistrict, address } =
    req.body;

  if (
    !serviceDate ||
    !serviceTime ||
    !province ||
    !district ||
    !subdistrict ||
    !address
  ) {
    return res.status(400).json({
      message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง'
    });
  }

  try {
    // ตรวจสอบว่ามีการนัดหมายนี้อยู่แล้วหรือไม่
    const existingAppointment = await connectionPool.query(
      `SELECT 1 FROM appointments WHERE user_id = $1 AND order_id = $2 AND service_date = $3 AND service_time = $4`,
      [userId, orderId, serviceDate, serviceTime]
    );

    if (existingAppointment.rowCount > 0) {
      return res.status(400).json({
        message: 'การนัดหมายของคำสั่งซ่อมนี้มีอยู่แล้ว'
      });
    }

    const result = await connectionPool.query(
      `insert into appointments (user_id, order_id, service_date, service_time, province, district, subdistrict, address)
       values ($1, $2, $3, $4, $5, $6, $7, $8) `,
      [
        userId,
        orderId,
        serviceDate,
        serviceTime,
        province,
        district,
        subdistrict,
        address
      ]
    );

    if (result.rowCount === 0) {
      return res.status(400).json({
        message: 'ไม่สามารถสร้างการนัดหมายได้'
      });
    }

    return res.status(201).json({
      message: 'สร้างการนัดหมายสำเร็จ'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};
