import { Router } from 'express';
import * as paymentController from '../controllers/payment.controller.mjs';

const paymentRouter = Router();

paymentRouter
  .post('/orders/:id/payment-intent', paymentController.createPaymentIntent)
  .get('/orders/:id/payment-intent', paymentController.getPaymentIntent)
  .put('/orders/:id/payment-intent', paymentController.updatePaymentIntent)
  .get('/orders/:id', paymentController.getPaymentOrder)
  .put('/orders/:id/success', paymentController.successPaymentOrder)
  .put('/orders/:id/fail', paymentController.failPaymentOrder);

export default paymentRouter;
