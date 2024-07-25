import { Router } from 'express';
import * as paymentController from '../controllers/payment.controller.mjs';

const paymentRouter = Router();

paymentRouter
  .post(
    '/orders/:id/create-payment-intent',
    paymentController.createPaymentIntent
  )
  .get('/orders/:id', paymentController.getPaymentOrder)
  .put('/orders/:id/success', paymentController.successPaymentOrder)
  .put('/orders/:id/fail', paymentController.failPaymentOrder);

export default paymentRouter;
