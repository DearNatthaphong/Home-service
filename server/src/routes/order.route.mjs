import { Router } from "express";
import { getOrderByQuerry } from "../controllers/order.controller.mjs";

const orderRouter = Router();

orderRouter.get("/", getOrderByQuerry);

export default orderRouter;
