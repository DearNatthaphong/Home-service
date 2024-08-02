import connectionPool from "../utils/db.mjs";

export const getAllService = async (req, res) => {
  try {
    const servicesResult = await connectionPool.query(`SELECT * FROM services`);

    const services = servicesResult.rows;

    for (let service of services) {
      const subServicesResult = await connectionPool.query(
        `SELECT * FROM service_items WHERE service_id = $1`,
        [service.service_id]
      );

      service.subServices = subServicesResult.rows;
    }

    return res.status(200).json({ data: services });
  } catch (error) {
    return res.status(500).json({
      message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
    });
  }
};
