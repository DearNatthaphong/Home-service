import { Router } from "express";
import * as promotionController from "../controllers/promotion.controller.mjs";

const promotionRouter = Router();

promotionRouter.post("/", promotionController.postPromotion);
promotionRouter.get("/", promotionController.getAllPromotion);
promotionRouter.put("/:id", promotionController.putPromotionById);
promotionRouter.delete("/:id", promotionController.deletePromotionById);
promotionRouter.get("/:id", promotionController.getPromotionById);

export default promotionRouter;
