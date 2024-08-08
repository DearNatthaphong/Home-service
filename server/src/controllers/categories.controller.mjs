import connectionPool from '../utils/db.mjs';

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;

  if (!categoryName?.trim()) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }

  try {
    await connectionPool.query(
      'INSERT INTO service_categories (category_name) values ($1)',
      [categoryName]
    );

    return res.status(200).json({
      message: 'สร้างข้อมูลสำเร็จ'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const fetchAllCategories = async (req, res) => {
  try {
    const result = await connectionPool.query(
      'SELECT * FROM service_categories ORDER BY category_name ASC'
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบหมวดหมู่ใดๆ' });
    }

    return res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const fetchCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      'SELECT * FROM service_categories WHERE service_category_id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบหมวดหมู่ที่ระบุ' });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;

  if (!categoryName?.trim()) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }
  try {
    const result = await connectionPool.query(
      'UPDATE service_categories SET category_name = $1 WHERE service_category_id = $2 returning *',
      [categoryName, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบหมวดหมู่ที่ระบุ' });
    }

    return res.status(200).json({
      message: 'อัปเดตข้อมูลสำเร็จ',
      data: result.rows[0]
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};

export const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await connectionPool.query(
      'DELETE FROM service_categories WHERE service_category_id = $1 returning *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ไม่พบหมวดหมู่ที่ระบุ' });
    }

    return res.status(200).json({
      message: 'ลบข้อมูลสำเร็จ'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }
};
