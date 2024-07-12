import isEmail from 'validator/lib/isEmail.js';
import isMobilePhone from 'validator/lib/isMobilePhone.js';

export const registerValidate = (data) => {
  const { fullName, phoneNumber, email, password, awareness } = data;
  const newErrors = {};

  if (
    !email?.trim() ||
    !password?.trim() ||
    !fullName?.trim() ||
    !phoneNumber?.trim() ||
    !awareness
  ) {
    newErrors.all = 'ข้อมูลไม่ครบหรือไม่ถูกต้อง';
    return newErrors;
  }

  if (!isEmail(email)) {
    newErrors.email = 'อีเมลไม่ถูกต้อง';
    return newErrors;
  }

  if (!isMobilePhone(phoneNumber, 'th-TH')) {
    newErrors.phoneNumber = 'เบอร์โทรศัพท์ไม่ถูกต้อง';
    return newErrors;
  }

  if (password.length < 12) {
    newErrors.password = 'หัสผ่านต้องมีอย่างน้อย 12 ตัว';
    return newErrors;
  }

  return newErrors;
};
