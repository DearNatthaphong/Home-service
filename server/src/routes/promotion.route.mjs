import { Router } from "express";
import * as promotionController from "../controllers/promotion.controller.mjs";

const promotionRouter = Router();

promotionRouter.post("/", promotionController.postPromotion);

export default promotionRouter;
