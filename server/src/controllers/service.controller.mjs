import connectionPool from "../utils/db.mjs";

export const getAllService = async (req, res) => {
  let results;
  try {
    results = await connectionPool.query(`select * from services`);
  } catch (error) {
    return res.status(500).json({
      message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
    });
  }

  return res.status(200).json({ data: results.rows });
};

export const getServiceItemsByServiceId = async (req, res) => {
  const {id} = req.params
  let results;
  try {
    results = await connectionPool.query(`select * from service_items where service_id = $1`, [id]);
    
  } catch (error) {
    return res.status(500).json({
      message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
    });
  }
  return res.status(200).json({ data: results.rows });
}