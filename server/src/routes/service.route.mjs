import { Router } from 'express';
import * as serviceController from '../controllers/service.controller.mjs';

const serviceRouter = Router();

serviceRouter.get('/', serviceController.getAllService);
serviceRouter.get('/limit3', serviceController.getSomeService);

serviceRouter
  .get('/', serviceController.getAllService)
  //// Dear
  .get(
    '/:id/service-items',
    [protect],
    serviceController.getServiceItemsByServiceId
  );

export default serviceRouter;
