import { Router } from "express";
import { createService } from "../controllers/create-service.controller.mjs";

const createServices = Router();

createServices.post("/services", createService);

export default createServices;
