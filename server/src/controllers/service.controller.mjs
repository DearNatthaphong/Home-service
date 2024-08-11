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

//// Dear
export const getServiceItemsByServiceId = async (req, res) => {
  const { id } = req.params;

  // Validate that id is provided
  if (!id) {
    return res.status(400).json({
      message: 'โปรดระบุรหัสการบริการ'
    });
  }

  try {
    const results = await connectionPool.query(
      `SELECT 
        s.service_name,
        si.service_item_name,
        si.service_item_id,
        si.service_price,
        si.service_unit
      FROM services AS s
      INNER JOIN service_items AS si ON s.service_id = si.service_id
      WHERE s.service_id = $1`,
      [id]
    );

    // Check if the service items were found
    if (results.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่พบรายการบริการสำหรับรหัสบริการที่ระบุ'
      });
    }

    // Format the response as required
    const formattedResponse = {
      serviceName: results.rows[0].service_name,
      serviceItems: results.rows.map((item) => ({
        serviceItemId: item.service_item_id,
        serviceItemName: item.service_item_name,
        servicePrice: item.service_price,
        serviceUnit: item.service_unit // Keeping this field in case you need it
      }))
    };

    return res.status(200).json({ data: formattedResponse });
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }
};
