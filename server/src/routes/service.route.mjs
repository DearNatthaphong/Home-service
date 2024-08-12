import { Router } from "express";
import * as serviceController from "../controllers/service.controller.mjs";
import { protect } from "../middlewares/protect.middleware.mjs";

const serviceRouter = Router();

serviceRouter.get("/", serviceController.getAllService);
serviceRouter.get("/limit3", serviceController.getSomeService);

export default serviceRouter;
