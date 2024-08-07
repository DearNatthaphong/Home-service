import connectionPool from "../utils/db.mjs";

// export const updateService = async (req, res) => {
//   const serviceId = req.params.id;
//   const { service_name, category_name } = req.body;
//   let subServices = [];
//   let imagePath = req.file ? req.file.filename : null; // Get the filename from multer

//   try {
//     // Parse subServices
//     if (typeof req.body.subServices === "string") {
//       subServices = JSON.parse(req.body.subServices);
//     } else if (Array.isArray(req.body.subServices)) {
//       subServices = req.body.subServices;
//     } else {
//       return res.status(400).json({
//         message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
//       });
//     }

//     if (!Array.isArray(subServices)) {
//       return res.status(400).json({
//         message: "ข้อมูลรายการบริการย่อยไม่ถูกต้อง",
//       });
//     }

//     // Update the main service
//     await connectionPool.query(
//       `UPDATE services
//            SET service_name = $1, category_name = $2, service_image = $3, updated_at = NOW()
//            WHERE service_id = $4`,
//       [
//         service_name,
//         category_name,
//         req.file ? req.file.filename : null,
//         serviceId,
//       ]
//     );

//     // Fetch existing service items
//     const existingServiceItems = await connectionPool.query(
//       `SELECT service_item_id FROM service_items WHERE service_id = $1`,
//       [serviceId]
//     );
//     const existingIds = new Set(
//       existingServiceItems.rows.map((row) => row.service_item_id.toString())
//     );

//     // Create a set of incoming IDs
//     const incomingIds = new Set(
//       subServices
//         .map((service) => service.service_item_id?.toString())
//         .filter((id) => id != null)
//     );

//     // Delete service items that are not in the new data
//     const idsToDelete = Array.from(existingIds).filter(
//       (id) => !incomingIds.has(id)
//     );
//     if (idsToDelete.length > 0) {
//       await connectionPool.query(
//         `DELETE FROM service_items WHERE service_item_id = ANY($1::bigint[]) AND service_id = $2`,
//         [idsToDelete, serviceId]
//       );
//     }

//     // Update or add service items
//     for (const subService of subServices) {
//       const { service_item_id, service_name, service_price, service_unit } =
//         subService;

//       if (!service_name || !service_price || !service_unit) {
//         return res.status(400).json({
//           message: "ข้อมูลรายการบริการย่อยไม่ครบถ้วน",
//         });
//       }

//       if (service_item_id && existingIds.has(service_item_id.toString())) {
//         // Update existing service item
//         await connectionPool.query(
//           `UPDATE service_items
//                SET service_name = $1, service_price = $2, service_unit = $3
//                WHERE service_item_id = $4 AND service_id = $5`,
//           [
//             service_name,
//             service_price,
//             service_unit,
//             service_item_id,
//             serviceId,
//           ]
//         );
//       } else {
//         // Add new service item
//         await connectionPool.query(
//           `INSERT INTO service_items (service_id, service_name, service_price, service_unit)
//                VALUES ($1, $2, $3, $4)`,
//           [serviceId, service_name, service_price, service_unit]
//         );
//       }
//     }

//     return res.status(200).json({
//       message: "อัพเดตข้อมูลบริการเรียบร้อย",
//     });
//   } catch (error) {
//     console.error("ข้อผิดพลาดในการอัปเดตบริการ:", error.message);
//     return res.status(500).json({
//       message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
//     });
//   }
// };

export const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const { service_name, category_name } = req.body;
  let subServices = [];
  let imagePath = req.file ? req.file.filename : null;

  try {
    // Parse subServices
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

    // Get the current service data to check for existing image
    const currentServiceData = await connectionPool.query(
      `SELECT service_image FROM services WHERE service_id = $1`,
      [serviceId]
    );

    // Check if service exists
    if (currentServiceData.rows.length === 0) {
      return res.status(404).json({
        message: "บริการไม่พบ",
      });
    }

    const currentImagePath = currentServiceData.rows[0].service_image;

    // Update the main service
    await connectionPool.query(
      `UPDATE services
           SET service_name = $1, category_name = $2, service_image = $3, updated_at = NOW()
           WHERE service_id = $4`,
      [
        service_name,
        category_name,
        imagePath || currentImagePath, // Use the existing image if no new image is uploaded
        serviceId,
      ]
    );

    // Fetch existing service items
    const existingServiceItems = await connectionPool.query(
      `SELECT service_item_id FROM service_items WHERE service_id = $1`,
      [serviceId]
    );
    const existingIds = new Set(
      existingServiceItems.rows.map((row) => row.service_item_id.toString())
    );

    // Create a set of incoming IDs
    const incomingIds = new Set(
      subServices
        .map((service) => service.service_item_id?.toString())
        .filter((id) => id != null)
    );

    // Delete service items that are not in the new data
    const idsToDelete = Array.from(existingIds).filter(
      (id) => !incomingIds.has(id)
    );
    if (idsToDelete.length > 0) {
      await connectionPool.query(
        `DELETE FROM service_items WHERE service_item_id = ANY($1::bigint[]) AND service_id = $2`,
        [idsToDelete, serviceId]
      );
    }

    // Update or add service items
    for (const subService of subServices) {
      const { service_item_id, service_name, service_price, service_unit } =
        subService;

      if (!service_name || !service_price || !service_unit) {
        return res.status(400).json({
          message: "ข้อมูลรายการไม่ครบถ้วน",
        });
      }

      if (service_item_id && existingIds.has(service_item_id.toString())) {
        // Update existing service item
        await connectionPool.query(
          `UPDATE service_items
               SET service_name = $1, service_price = $2, service_unit = $3
               WHERE service_item_id = $4 AND service_id = $5`,
          [
            service_name,
            service_price,
            service_unit,
            service_item_id,
            serviceId,
          ]
        );
      } else {
        // Add new service item
        await connectionPool.query(
          `INSERT INTO service_items (service_id, service_name, service_price, service_unit)
               VALUES ($1, $2, $3, $4)`,
          [serviceId, service_name, service_price, service_unit]
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
