// import { Router } from "express";
// import { updateService } from "../controllers/fix-service.controller.mjs";

// const updateServiceRouter = Router();

// updateServiceRouter.put("/:id", updateService);

// export default updateServiceRouter;

import multer from "multer";
import { Router } from "express";
import { updateService } from "../controllers/fix-service.controller.mjs";

const upload = multer({ dest: "uploads/" }); // กำหนดที่เก็บไฟล์

const updateServiceRouter = Router();

updateServiceRouter.put("/:id", upload.single("service_image"), updateService);

export default updateServiceRouter;
