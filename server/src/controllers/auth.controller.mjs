import connectionPool from '../utils/db.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const adminLogin = async (req, res) => {
  const getUserData = {
    ...req.body
  };
  let user;
  try {
    user = await connectionPool.query(
      `select * from users where email = $1 and role = 'admin'`,
      [getUserData.email]
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
  }

  if (!user.rowCount) {
    return res.status(404).json({
      message: 'ไม่สามารถเข้าสู่ระบบได้เนื่องจากคุณไม่ใช่ Admin'
    });
  }

  const plainPassword = getUserData.password;
  const hashPassword = user.rows[0].password;

  const userData = {
    user_id: user.rows[0].user_id,
    email: user.rows[0].email,
    role: user.rows[0].role
  };

  const isInvalidPassword = await bcrypt.compare(plainPassword, hashPassword);
  if (!isInvalidPassword) {
    return res.status(401).json({
      message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง'
    });
  }

  const token = jwt.sign(
    {
      id: userData.user_id,
      email: userData.email,
      role: userData.role
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1d'
    }
  );

  return res.status(200).json({
    message: 'เข้าสู่ระบบสำเร็จ',
    token: token
  });
};

export const login = async (req, res) => {
  let { email, password } = req.body;
  let result;

  try {
    result = await connectionPool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    console.log(result);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'ไม่พบผู้ใช้งานในระบบ'
      });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      result.rows[0].password
    );

    if (!isValidPassword) {
      return res.status(400).json({
        message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง'
      });
    }

    const userId = result.rows[0].user_id;
    const profile = await connectionPool.query(
      'SELECT * FROM user_profiles WHERE user_id = $1',
      [userId]
    );
    const token = jwt.sign(
      {
        id: result.rows[0].user_id,
        email: result.rows[0].email,
        role: result.rows[0].role,
        fullName: profile.rows[0].full_name
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1d'
      }
    );

    res.status(200).json({
      message: 'เข้าสู่ระบบสำเร็จ',
      token: token
    });
  } catch (error) {
    console.error('Internal server error:', error);
    return res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
  }
};

export const register = async (req, res) => {
  let { email, password, fullName, phoneNumber, awareness } = req.body;

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  try {
    const result = await connectionPool.query(
      'insert into users (email,password) values ($1,$2) returning user_id',
      [email, password]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: 'ไม่สามารถลงทะเบียนได้' });
    }

    let userId = result.rows[0].user_id;

    await connectionPool.query(
      'insert into user_profiles (user_id, full_name, phone_number, awareness) values ($1,$2,$3,$4)',
      [userId, fullName, phoneNumber, awareness]
    );
  } catch (error) {
    return res.status(500).json({
      message: 'พบข้อผิดพลาดภายในเซอร์เวอร์'
    });
  }

  res.status(201).json({ message: 'การลงทะเบียนสำเร็จ' });
};
