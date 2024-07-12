import connectionPool from "../utils/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  const getUserData = {
    ...req.body,
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
      message: "Internal Server Error",
    });
  }

  if (!user.rowCount) {
    return res.status(404).json({
      message: "คุณไม่ใช่ ADMIN!!!",
    });
  }

  const plainPassword = getUserData.password;
  const hashPassword = user.rows[0].password;

  const userData = {
    user_id: user.rows[0].user_id,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const isInvalidPassword = await bcrypt.compare(plainPassword, hashPassword);
  if (!isInvalidPassword) {
    return res.status(401).json({
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    });
  }

  const token = jwt.sign(
    {
      id: userData.user_id,
      email: userData.email,
      role: userData.role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "90000",
    }
  );

  return res.status(200).json({
    message: "Login สำเร็จ",
    token: token,
  });
};
