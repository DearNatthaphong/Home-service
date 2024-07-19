import { Router } from 'express';
import { paymentIntent } from '../controllers/payment.controller.mjs';
import { protect } from '../middlewares/protect.middleware.mjs';

const paymentRouter = Router();

paymentRouter.post('/create-payment-intent', paymentIntent);

export default paymentRouter;
