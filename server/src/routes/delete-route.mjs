import { Router } from "express";
import { deleteService } from "../controllers/delete-service.controller.mjs";

const deleteServiceRoute = Router();

deleteServiceRoute.delete("/:id", deleteService);

export default deleteServiceRoute;
