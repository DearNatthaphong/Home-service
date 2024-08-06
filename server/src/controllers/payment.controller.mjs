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

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(total_price),
      currency: 'thb',
      automatic_payment_methods: {
        enabled: true
      }
    });

    return res.status(200).json({
      message: 'สร้าง payment intent สำเร็จ',
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const getPaymentOrder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const result = await connectionPool.query(
      `SELECT
      a.service_date,
      a.service_time,
      a.address,
      a.district,
      a.subdistrict,
      a.province,
      o.total_price,
      oi.order_item_id,
      oi.quantity,
      s.service_name
    FROM
      appointments AS a
    INNER JOIN orders AS o ON a.order_id = o.order_id
    INNER JOIN order_items AS oi ON o.order_id = oi.order_id
    INNER JOIN service_items AS s ON oi.service_item_id = s.service_item_id
    WHERE
      a.order_id = $1 AND o.user_id = $2`,
      [id, userId]
    );

    console.log(result);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบคำสั่งซ่อมในคำขอ' });
    }

    // return res.status(200).json({
    //   message: 'ดึงข้อมูลรายการซ่อมสำเร็จ',
    //   data: result.rows[0]
    // });

    // จัดระเบียบข้อมูล
    const orderData = {
      serviceDate: result.rows[0].service_date,
      serviceTime: result.rows[0].service_time,
      address: result.rows[0].address,
      district: result.rows[0].district,
      subdistrict: result.rows[0].subdistrict,
      province: result.rows[0].province,
      orderItems: result.rows.map((row) => ({
        orderItemId: row.order_item_id,
        serviceName: row.service_name,
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
