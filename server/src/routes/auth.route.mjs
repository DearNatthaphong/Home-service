import { Router } from "express";
import * as authController from "../controllers/auth.controller.mjs";
import { adminValidateLogin } from "../middlewares/admin.login.validation.mjs";
import { validateLogin } from "../middlewares/login.validation.mjs";

const authRouter = Router();

authRouter
  .post("/admin/login", [adminValidateLogin], authController.adminLogin)
  .post("/login", [validateLogin], authController.login);

export default authRouter;
