import dotenv from 'dotenv';
import Stripe from 'stripe';
import connectionPool from '../utils/db.mjs';
// import jwt from 'jsonwebtoken';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  return items * 100;
};

export const createPaymentIntent = async (req, res) => {
  // const { items } = req.body;
  const { id } = req.params;

  let order;
  try {
    // เชค order ถ้ามี ให้เลือก total_price ออกมา
    order = await connectionPool.query(
      `select total_price from orders where order_id=$1 AND (payment_status=$2 OR payment_status=$3)`,
      [id, 'pending', 'fail']
    );

    if (!order.rows.length) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    const { total_price } = order.rows[0];

    // สร้าง Customer ใน Stripe (หากยังไม่มี)
    const customer = await stripe.customers.create({
      name: req.user.fullName,
      email: req.user.email,
      metadata: {
        userId: req.user.id
      }
    });

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(total_price),
      currency: 'thb',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true
      },
      metadata: {
        orderId: id
      }
    });

    // update payment_intent_id to database
    const updateResult = await connectionPool.query(
      `UPDATE orders SET payment_intent_id = $1 WHERE order_id = $2`,
      [paymentIntent.id, id]
    );

    if (updateResult.rowCount === 0) {
      return res.status(400).json({ message: 'ปรับปรุงคำสั่งซื้อไม่สำเร็จ' });
    }

    return res.status(200).json({
      message: 'สร้าง payment intent สำเร็จ',
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    return res
      .status(500)
      .json({ message: 'เกิดข้อผิดพลาดในการสร้างการชำระเงิน' });
    // if (error.type === 'StripeCardError') {
    //   // Handle a declined card error
    //   return res.status(402).json({ message: 'บัตรเครดิตของคุณถูกปฏิเสธ' });
    // } else if (error.type === 'StripeInvalidRequestError') {
    //   // Handle invalid request errors
    //   return res
    //     .status(400)
    //     .json({ message: 'ข้อมูลที่ส่งมามีรูปแบบไม่ถูกต้อง' });
    // } else {
    //   // Handle other errors
    //   return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการชำระเงิน' });
    // }
  }
};

export const getPaymentIntent = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await connectionPool.query(
      `SELECT payment_intent_id FROM orders WHERE order_id = $1`,
      [id]
    );

    if (!order.rows.length) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    const { payment_intent_id } = order.rows[0];

    const paymentIntent = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );

    return res.status(200).json({
      message: 'ดึงข้อมูล payment intent สำเร็จ',
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error retrieving PaymentIntent:', error);
    return res
      .status(500)
      .json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการชำระเงิน' });
  }
};

export const updatePaymentIntent = async (req, res) => {
  const { id } = req.params;

  let order;
  try {
    order = await connectionPool.query(
      `select total_price, payment_intent_id from orders where order_id=$1 AND (payment_status=$2 OR payment_status=$3)`,
      [id, 'pending', 'fail']
    );

    if (!order.rows.length) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    const { total_price, payment_intent_id } = order.rows[0];

    // ตรวจสอบว่า total_price เป้นตัวเลขหรือไม่
    if (isNaN(total_price)) {
      return res.status(400).json({ message: 'ข้อมูลราคาไม่ถูกต้อง' });
    }

    const updatedPaymentIntent = await stripe.paymentIntents.update(
      payment_intent_id,
      {
        amount: calculateOrderAmount(total_price),
        currency: 'thb'
      }
    );

    return res.status(200).json({
      message: 'ปรับปรุง payment intent สำเร็จ',
      clientSecret: updatedPaymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error updating PaymentIntent:', error);
    return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการชำระเงิน' });
    // if (error.type === 'StripeInvalidRequestError') {
    //     return res.status(400).json({ message: 'PaymentIntent ไม่ถูกต้อง' });
    //   } else {
    //     return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการชำระเงิน' });
    //   }
  }
};

export const getPaymentOrder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const result = await connectionPool.query(
      `SELECT
      s.service_name,
      s.service_image,
      a.service_date,
      a.service_time,
      a.address,
      a.district,
      a.subdistrict,
      a.province,
      o.total_price,
      oi.order_item_id,
      oi.quantity,
      si.service_item_name
    FROM
      appointments AS a
    INNER JOIN orders AS o ON a.order_id = o.order_id
    INNER JOIN order_items AS oi ON o.order_id = oi.order_id
    INNER JOIN service_items AS si ON oi.service_item_id = si.service_item_id
    INNER JOIN services AS s ON s.service_id = si.service_id
    WHERE
      a.order_id = $1 AND o.user_id = $2`,
      [id, userId]
    );

    console.log(result);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    // จัดระเบียบข้อมูล
    const orderData = {
      serviceName: result.rows[0].service_name,
      serviceImage: result.rows[0].service_image,
      serviceDate: result.rows[0].service_date,
      serviceTime: result.rows[0].service_time,
      address: result.rows[0].address,
      district: result.rows[0].district,
      subdistrict: result.rows[0].subdistrict,
      province: result.rows[0].province,
      orderItems: result.rows.map((row) => ({
        orderItemId: row.order_item_id,
        serviceItemName: row.service_item_name,
        quantity: row.quantity
      })),
      totalPrice: result.rows[0].total_price
    };

    return res.status(200).json(orderData);
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const successPaymentOrder = async (req, res) => {
  const { id } = req.params;
  const successText = 'success';

  try {
    const result = await connectionPool.query(
      `UPDATE orders
      set payment_status = $1
      where order_id = $2
      RETURNING *`,
      [successText, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    return res.status(200).json({ message: 'ปรับปรุงสถานะทางการเงินสำเร็จ' });
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const failPaymentOrder = async (req, res) => {
  const { id } = req.params;
  const successText = 'fail';

  try {
    const result = await connectionPool.query(
      `UPDATE orders
      set payment_status = $1
      where order_id = $2
      RETURNING *`,
      [successText, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    return res.status(200).json({ message: 'ปรับปรุงสถานะทางการเงินสำเร็จ' });
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};
