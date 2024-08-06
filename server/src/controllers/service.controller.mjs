import connectionPool from '../utils/db.mjs';

export const getAllService = async (req, res) => {
  try {
    const servicesResult = await connectionPool.query(
      `SELECT * FROM services ORDER BY created_at DESC`
    );

    const services = servicesResult.rows;

    for (let service of services) {
      const subServicesResult = await connectionPool.query(
        `SELECT * FROM service_items WHERE service_id = $1 ORDER BY created_at DESC`,
        [service.service_id]
      );

      service.subServices = subServicesResult.rows;
    }

    return res.status(200).json({ data: services });
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};

export const getSomeService = async (req, res) => {
  try {
    const serviceLimit = await connectionPool.query(
      `select * from services limit 3`
    );
    const results = serviceLimit.rows;
    return res.status(200).json({
      data: results
    });
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซริฟเวอร์'
    });
  }
};

export const getServiceItemsByServiceId = async (req, res) => {
  const { id } = req.params;
  let results;
  try {
    results = await connectionPool.query(
      `select * from service_items where service_id = $1`,
      [id]
    );
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
  return res.status(200).json({ data: results.rows });
};
