import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export const paymentIntent = async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'thb',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true
    }
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
};

//////  ****************** ////////////////////////
// const calculateOrderAmount = (items) => {
//   // คำนวณจำนวนเงินทั้งหมดของคำสั่งซื้อที่นี่
//   // ตัวอย่างเช่น:
//   const totalAmount = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   return totalAmount;
// };

// export const paymentIntent = async (req, res) => {
//   const { items } = req.body;

//   if (!items || items.length === 0) {
//     return res.status(400).json({
//       message: 'ไม่มีสินค้าในคำขอ'
//     });
//   }

//   let paymentIntent;
//   try {
//     // สร้าง PaymentIntent ด้วยจำนวนเงินและสกุลเงิน
//     paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(items),
//       currency: 'thb',
//       automatic_payment_methods: {
//         enabled: true
//       }
//     });

//     // ส่งการตอบกลับเมื่อการสร้าง PaymentIntent สำเร็จ
//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์จากทาง Stripe'
//     });
//   }
// };
//////  ****************** ////////////////////////
