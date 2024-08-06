import connectionPool from "../utils/db.mjs";

export const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT
        services.service_name AS main_service_name,
        services.created_at,
        services.updated_at,
        services.category_name,
        services.service_image,
        service_items.service_name AS sub_service_name,
        service_items.service_price,
        service_items.service_unit
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
      },
      sub_services: result.rows
        .filter((row) => row.sub_service_name) // กรองแถวที่มีบริการย่อย
        .map((row) => ({
          service_name: row.sub_service_name,
          service_price: row.service_price,
          service_unit: row.service_unit,
        })),
    };

    res.json(serviceData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
