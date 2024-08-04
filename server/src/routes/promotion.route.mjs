import { Router } from "express";
import * as promotionController from "../controllers/promotion.controller.mjs";

const promotionRouter = Router();

promotionRouter.post("/", promotionController.postPromotion);
promotionRouter.get("/", promotionController.getAllPromotion);

export default promotionRouter;
