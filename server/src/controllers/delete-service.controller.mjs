import connectionPool from "../utils/db.mjs";

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
