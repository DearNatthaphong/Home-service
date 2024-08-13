import { Router } from 'express';
import * as orderController from '../controllers/order.controller.mjs';

const orderRouter = Router();

orderRouter
  .get('/', orderController.getOrderByQuerry)
  ////   Dear
  .post('/', orderController.createOrder)
  .post('/:orderId/order-items', orderController.createOrderItems)
  .get('/:orderId/order-items', orderController.fetchAllOrderItems)
  .post('/:orderId/appointments', orderController.createAppointment);

export default orderRouter;
