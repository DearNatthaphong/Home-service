import express from 'express';
import cors from 'cors';
import authRouter from './src/routes/auth.route.mjs';
import { protect } from './src/middlewares/protect.middleware.mjs';
import dotenv from 'dotenv';
import paymentRouter from './src/routes/payment.route.mjs';
import serviceRouter from './src/routes/service.route.mjs';
import orderRouter from './src/routes/order.route.mjs';
import promotionRouter from "./src/routes/promotion.route.mjs";
import appointmentRouter from "./src/routes/appointment.route.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Sawaddee');
  res.send('Hello World!');
});

app.use('/service', serviceRouter);
app.use('/auth', authRouter);
app.use(protect);
app.use('/payment', paymentRouter);
app.use('/orders', orderRouter);
app.use("/promotions", promotionRouter);
app.use("/appointments", appointmentRouter);

app.get('/', (req, res) => {
  console.log('Sawaddee');
  res.send('Hello World!');
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
