import { Router } from "express";
import * as userController from "../controllers/user.controler.mjs";
import * as orderController from "../controllers/order.controller.mjs";

const orderRouter = Router();

orderRouter.post("/", userController.postOrders);
orderRouter.post("/:id/order-items", userController.postOrderItems );
orderRouter.get("/:id/order-items", userController.getOrderItems);
orderRouter.get("/", orderController.getOrderByQuerry);

export default orderRouter;