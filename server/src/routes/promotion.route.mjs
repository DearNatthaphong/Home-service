import { Router } from 'express';
import * as promotionController from '../controllers/promotion.controller.mjs';

const promotionRouter = Router();

promotionRouter
  .get('/', promotionController.getPromotion)
  .put(
    '/:promotionId/orders/:orderId/update-total-price',
    promotionController.updateTotalPrice
  )
  .post(
    '/:promotionId/orders/:orderId/promotion-usages',
    promotionController.createPromotionUsage
  )
  .post('/', promotionController.postPromotion)
  .get('/', promotionController.getAllPromotion)
  .put('/:id', promotionController.putPromotionById)
  .delete('/:id', promotionController.deletePromotionById)
  .get('/:id', promotionController.getPromotionById);

export default promotionRouter;
