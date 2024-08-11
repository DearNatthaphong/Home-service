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
//create
export const createService = [
  upload.single("service_image"),
  async (req, res) => {
    console.log("Request Body:", req.body);

    const { service_name, category_name, subServices, service_image } =
      req.body;
    const serviceImage = req.file ? req.file.filename : null;
    console.log(service_image);

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

    if (!Array.isArray(parsedSubServices)) {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    const client = await connectionPool.connect();
    try {
      await client.query("BEGIN");

      const result = await client.query(
        `INSERT INTO services (service_name, category_name, service_image) VALUES ($1, $2, $3) RETURNING service_id`,
        [service_name, category_name, service_image]
      );

      const serviceId = result.rows[0].service_id;

      for (const subService of parsedSubServices) {
        if (!subService.name || !subService.price || !subService.unit) {
          await client.query("ROLLBACK");
          return res.status(400).json({
            message: "ข้อมูลรายการบริการย่อยไม่ครบถ้วน",
          });
        }
        await client.query(
          `INSERT INTO service_items (service_id, service_item_name, service_price, service_unit) VALUES ($1, $2, $3, $4)`,
          [serviceId, subService.name, subService.price, subService.unit]
        );
      }

      await client.query("COMMIT");

      return res.status(201).json({
        message: "สร้างเซอร์วิสใหม่เรียบร้อย",
      });
    } catch (error) {
      console.error("ข้อผิดพลาดในการสร้างบริการ:", error.message);
      await client.query("ROLLBACK");
      return res.status(500).json({
        message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
      });
    } finally {
      client.release();
    }
  },
];
//view
export const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
        SELECT
          services.service_name AS main_service_name,
          services.service_id,
          services.created_at,
          services.updated_at,
          services.category_name,
          services.service_image,
          service_items.service_item_name AS sub_service_name,
          service_items.service_price,
          service_items.service_unit,
          service_items.service_item_id
        FROM services
        LEFT JOIN service_items ON services.service_id = service_items.service_id
        WHERE services.service_id = $1
      `;

    const result = await connectionPool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Service not found" });
    }

    const serviceData = {
      main_service: {
        service_name: result.rows[0].main_service_name,
        created_at: result.rows[0].created_at,
        updated_at: result.rows[0].updated_at,
        category_name: result.rows[0].category_name,
        service_image: result.rows[0].service_image,
        service_id: result.rows[0].service_id,
      },
      sub_services: result.rows
        .filter((row) => row.sub_service_name) // กรองแถวที่มีบริการย่อย
        .map((row) => ({
          service_item_name: row.sub_service_name,
          service_price: row.service_price,
          service_unit: row.service_unit,
          service_item_id: row.service_item_id,
        })),
    };

    res.json(serviceData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
//update
export const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const { service_name, category_name, service_image } = req.body;
  let subServices = [];
  let imagePath = req.file ? req.file.filename : null;
  console.log("doraemon", req.body);

  try {
    if (typeof req.body.subServices === "string") {
      subServices = JSON.parse(req.body.subServices);
    } else if (Array.isArray(req.body.subServices)) {
      subServices = req.body.subServices;
    } else {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    if (!Array.isArray(subServices)) {
      return res.status(400).json({
        message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
      });
    }

    const currentServiceData = await connectionPool.query(
      `SELECT service_image FROM services WHERE service_id = $1`,
      [serviceId]
    );

    if (currentServiceData.rows.length === 0) {
      return res.status(404).json({
        message: "บริการไม่พบ",
      });
    }

    const currentImagePath = currentServiceData.rows[0].service_image;

    await connectionPool.query(
      `UPDATE services
             SET service_name = $1, category_name = $2, service_image = $3, updated_at = NOW()
             WHERE service_id = $4`,
      [service_name, category_name, service_image, serviceId]
    );
    console.log(serviceId);

    const existingServiceItems = await connectionPool.query(
      `SELECT service_item_id FROM service_items WHERE service_id = $1`,
      [serviceId]
    );
    const existingIds = new Set(
      existingServiceItems.rows.map((row) => row.service_item_id.toString())
    );

    const incomingIds = new Set(
      subServices
        .map((service) => service.service_item_id?.toString())
        .filter((id) => id != null)
    );

    const idsToDelete = Array.from(existingIds).filter(
      (id) => !incomingIds.has(id)
    );
    if (idsToDelete.length > 0) {
      await connectionPool.query(
        `DELETE FROM service_items WHERE service_item_id = ANY($1::bigint[]) AND service_id = $2`,
        [idsToDelete, serviceId]
      );
    }

    for (const subService of subServices) {
      const {
        service_item_id,
        service_item_name,
        service_price,
        service_unit,
      } = subService;

      if (!service_item_name || !service_price || !service_unit) {
        return res.status(400).json({
          message: "ข้อมูลรายการไม่ครบถ้วน",
        });
      }

      if (service_item_id && existingIds.has(service_item_id.toString())) {
        await connectionPool.query(
          `UPDATE service_items
           SET service_item_name = $1, service_price = $2, service_unit = $3
           WHERE service_item_id = $4 AND service_id = $5`,
          [
            service_item_name,
            service_price,
            service_unit,
            service_item_id,
            serviceId,
          ]
        );
      } else {
        await connectionPool.query(
          `INSERT INTO service_items (service_id, service_item_name, service_price, service_unit)
           VALUES ($1, $2, $3, $4)`,
          [serviceId, service_item_name, service_price, service_unit]
        );
      }
    }

    return res.status(200).json({
      message: "อัพเดตข้อมูลบริการเรียบร้อย",
    });
  } catch (error) {
    console.error("ข้อผิดพลาดในการอัปเดตบริการ:", error.message);
    return res.status(500).json({
      message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
    });
  }
};
//delete
export const deleteService = async (req, res) => {
  const serviceId = req.params.id;

  if (!serviceId) {
    return res.status(400).json({ message: "Service ID is required" });
  }

  try {
    const result = await connectionPool.query(
      "DELETE FROM services WHERE service_id = $1",
      [serviceId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "ไม่พบเซอร์วิส" });
    }

    res.status(200).json({ message: "ลบข้อมูลเซอร์วิสสำเร็จ" });
  } catch (error) {
    console.error("Error deleting service:", error.message, error.stack);
    res.status(500).json({ message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์" });
  }
};
//getcategory
export const getServiceCategories = async (req, res) => {
  const client = await connectionPool.connect();

  try {
    const result = await client.query(
      `SELECT service_category_id, category_name FROM service_categories ORDER BY category_name ASC`
    );

    const serviceCategories = result.rows;

    return res.status(200).json(serviceCategories);
  } catch (error) {
    console.error("Error fetching service categories:", error.message);
    return res.status(500).json({
      message: "พบข้อผิดพลาดในการดึงข้อมูลหมวดหมู่บริการ",
    });
  } finally {
    client.release();
  }
};
