import connectionPool from "../utils/db.mjs";

export const postAppointment = async (req, res) => {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        message: "ผู้ใช้ไม่ได้รับอนุญาต",
      });
    }
  
    const userId = req.user.id;
    const newAppointment = {
      ...req.body,
      userId,
    };
  
    const { service_date, service_time, province, district, subdistrict, address } = newAppointment;
  
    if (!service_date || !service_time || !province || !district || !subdistrict || !address) {
      return res.status(400).json({
        message: "ข้อมูลไม่ครบหรือไม่ถูกต้อง",
      });
    }
  
    try {
      const results = await connectionPool.query(
        `insert into appointments (user_id, service_date, service_time, province, district, subdistrict, address)
         values ($1, $2, $3, $4, $5, $6, $7) returning appointment_id, service_date, service_time, province, district, subdistrict, address`,
        [userId, service_date, service_time, province, district, subdistrict, address]
      );
  
      const appointment = results.rows[0];
      return res.status(201).json({
        message: "สร้างการนัดหมายสำเร็จ",
        data: appointment,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
      });
    }
  };
  