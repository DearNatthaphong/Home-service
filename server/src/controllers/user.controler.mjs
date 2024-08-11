import connectionPool from '../utils/db.mjs';
import generateOrderNumber from '../utils/generate.order.mjs';

export const postOrders = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({
      message: 'ผู้ใช้ไม่ได้รับอนุญาต'
    });
  }

  const userId = req.user.id;
  const orderNumber = generateOrderNumber();
  const newOrder = {
    ...req.body,
    userId,
    orderNumber
  };

  if (!newOrder.total_price) {
    return res.status(400).json({
      message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง'
    });
  }

  try {
    const results = await connectionPool.query(
      `INSERT INTO orders (user_id, order_number, total_price)
       VALUES ($1, $2, $3) RETURNING order_id`,
      [newOrder.userId, newOrder.orderNumber, newOrder.total_price]
    );
    const orderId = results.rows[0];
    return res.status(201).json({
      message: 'สร้างคำสั่งซ่อมสำเร็จ',
      data: orderId
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};

export const postOrderItems = async (req, res) => {
  const orderId = req.params.id;
  const orderItems = req.body;

  if (!Array.isArray(orderItems) || orderItems.length === 0) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }

  try {
    const postOrderItems = await Promise.all(
      orderItems.map(async (item) => {
        if (!item.service_item_id || !item.quantity) {
          throw new Error('ข้อมูลไม่ครบหรือไม่ถูกต้อง');
        }

        const result = await connectionPool.query(
          `INSERT INTO order_items (order_id, service_item_id, quantity)
         VALUES ($1, $2, $3) RETURNING order_item_id, quantity`,
          [orderId, item.service_item_id, item.quantity]
        );

        return {
          order_item_id: result.rows[0].order_item_id,
          quantity: result.rows[0].quantity
        };
      })
    );

    res.status(201).json(postOrderItems);
  } catch (error) {
    console.error(error);
    if (error.message === 'ข้อมูลไม่ครบหรือไม่ถูกต้อง') {
      res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
    } else {
      res.status(500).json({ message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์' });
    }
  }
};

export const getOrderItems = async (req, res) => {
  const orderId = req.params.id;

  try {
    const results = await connectionPool.query(
      `select 
      orders.total_price,
      order_items.order_item_id,
      order_items.quantity,
      service_items.service_name
      from orders
      inner join order_items on orders.order_id = order_items.order_id
      inner join service_items on order_items.service_item_id = service_items.service_item_id
      where orders.order_id = $1 `,
      [orderId]
    );

    if (results.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่พบรายการซ่อม'
      });
    }

    const totalPrice = results.rows[0].total_price;
    const orderItems = results.rows.map((row) => ({
      order_item_id: row.order_item_id,
      service_name: row.service_name,
      quantity: row.quantity
    }));

    return res.status(200).json({
      total_price: totalPrice,
      order_items: orderItems
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};
