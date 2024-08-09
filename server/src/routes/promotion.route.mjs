import { Router } from "express";
import * as promotionController from "../controllers/promotion.controller.mjs";

const promotionRouter = Router();

promotionRouter
  .get("/", promotionController.getPromotion)
  .put(
    "/:promotionId/orders/:orderId/update-total-price",
    promotionController.updateTotalPrice
  )
  .post(
    "/:promotionId/orders/:orderId/promotion-usages",
    promotionController.createPromotionUsage
  );

export default promotionRouter;
