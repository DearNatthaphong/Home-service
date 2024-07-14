import isEmail from "validator/lib/isEmail.js";

export const adminValidateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    return res.status(400).json({
      message: "ข้อมูลไม่ครบถ้วน",
    });
  }

  if (!isEmail(email.trim())) {
    return res.status(400).json({
      message: "อีเมลไม่ถูกต้อง",
    });
  }

  if (password.length < 12) {
    return res.status(400).json({
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    });
  }

  next();
};
