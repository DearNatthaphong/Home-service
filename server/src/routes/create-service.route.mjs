import { Router } from "express";
import { createService } from "../controllers/create-service.controller.mjs";

const createServices = Router();

createServices.post("/", createService);

export default createServices;
