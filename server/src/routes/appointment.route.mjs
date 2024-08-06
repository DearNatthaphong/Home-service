import { Router } from "express";
import * as appointmentController from "../controllers/appointment.controller.mjs";

const appointmentRouter = Router();

appointmentRouter.post("/", appointmentController.postAppointment);

export default appointmentRouter;