import { Router } from "express";
import * as serviceAuthController from "../controllers/service-auth.controller.mjs";
import multer from "multer";

const upload = multer({ dest: "uploads/" }); // กำหนดที่เก็บไฟล์

const serviceAuthRouter = Router();

serviceAuthRouter.post("/", serviceAuthController.createService);
serviceAuthRouter.get("/:id", serviceAuthController.getServiceById);
serviceAuthRouter.put(
  "/:id",
  upload.single("service_image"),
  serviceAuthController.updateService
);
serviceAuthRouter.delete("/:id", serviceAuthController.deleteService);

export default serviceAuthRouter;
