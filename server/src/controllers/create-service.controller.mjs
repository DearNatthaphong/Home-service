import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import connectionPool from "../utils/db.mjs";

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({ storage });

export const createService = [
  upload.single("service_image"),
  async (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { service_name, category_name, subServices } = req.body;
    const serviceImage = req.file ? req.file.filename : null;

    // ตรวจสอบว่าข้อมูล subServices เป็น JSON string และแปลงเป็น JavaScript object
    if (typeof subServices !== "string") {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    let parsedSubServices = [];
    try {
      parsedSubServices = JSON.parse(subServices);
    } catch (error) {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    // ตรวจสอบรูปแบบของ subServices
    if (!Array.isArray(parsedSubServices)) {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    try {
      // เพิ่มข้อมูลหลักของบริการ
      const result = await connectionPool.query(
        `INSERT INTO services (service_name, category_name, service_image) VALUES ($1, $2, $3) RETURNING service_id`,
        [service_name, category_name, serviceImage]
      );

      const serviceId = result.rows[0].service_id;

      // เพิ่มข้อมูลบริการย่อย
      for (const subService of parsedSubServices) {
        if (!subService.name || !subService.price || !subService.unit) {
          return res.status(400).json({
            message: "ข้อมูลรายการบริการย่อยไม่ครบถ้วน",
          });
        }
        await connectionPool.query(
          `INSERT INTO service_items (service_id, service_name, service_price, service_unit) VALUES ($1, $2, $3, $4)`,
          [serviceId, subService.name, subService.price, subService.unit]
        );
      }

      return res.status(201).json({
        message: "สร้างเซอร์วิสใหม่เรียบร้อย",
      });
    } catch (error) {
      console.error("ข้อผิดพลาดในการสร้างบริการ:", error.message);
      return res.status(500).json({
        message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
      });
    }
  },
];
