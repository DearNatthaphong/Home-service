import isEmail from 'validator/lib/isEmail.js';
import isMobilePhone from 'validator/lib/isMobilePhone.js';

export const validateRegistration = (req, res, next) => {
  const { email, password, fullName, phoneNumber, awareness } = req.body;

  if (
    !email?.trim() ||
    !password?.trim() ||
    !fullName?.trim() ||
    !phoneNumber?.trim() ||
    !awareness
  ) {
    return res.status(400).json({ message: 'ข้อมูลไม่ครบหรือไม่ถูกต้อง' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      message: 'อีเมลไม่ถูกต้อง'
    });
  }

  if (!isMobilePhone(phoneNumber, 'th-TH')) {
    return res.status(400).json({
      message: 'เบอร์โทรศัพท์ไม่ถูกต้อง'
    });
  }

  if (password.length < 12) {
    return res.status(400).json({ message: 'รหัสผ่านต้องมีอย่างน้อย 12 ตัว' });
  }

  next();
};
