import { Router } from "express";
import * as promotionController from "../controllers/promotion.controller.mjs";

const adminPromotionRouter = Router();

adminPromotionRouter
  .post("/", promotionController.postPromotion)
  .get("/", promotionController.getAllPromotion)
  .put("/:id", promotionController.putPromotionById)
  .delete("/:id", promotionController.deletePromotionById)
  .get("/:id", promotionController.getPromotionById);

export default adminPromotionRouter;
