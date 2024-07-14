import isEmail from "validator/lib/isEmail.js";

export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ message: 'กรุณาใส่อีเมลหรือรหัสผ่าน' });
    }
  
    if (!isEmail(email)) {
      return res.status(400).json({ message: 'รูปแบบอีเมลไม่ถูกต้อง' });
    }

    if(password.length < 12) {
        return res.status(400).json({
            message: "รหัสผ่านต้องมีอย่างน้อย 12 ตัวอักษร"
        });
    }
  
    next();
  };
