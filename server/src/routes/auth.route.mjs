import { Router } from "express";
import * as authController from "../controllers/auth.controller.mjs";
import { adminValidateLogin } from "../middlewares/admin.login.validation.mjs";

const authRouter = Router();

authRouter.post(
  "/admin/login",
  [adminValidateLogin],
  authController.adminLogin);



authRouter.post('/login', [validateLogin], authController.login);

export default authRouter;
