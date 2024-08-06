import { Router } from "express";
import { getServiceById } from "../controllers/view-service.controller.mjs";

const ViewServiceRouter = Router();

ViewServiceRouter.get("/:id", getServiceById);

export default ViewServiceRouter;
