import isEmail from "validator/lib/isEmail.js";

export const loginValidate = (data) => {
  const { email, password } = data;
  const newErrors = {};

  if (!email?.trim() || !password?.trim()) {
    newErrors.all = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
    return newErrors;
  }

  if (!isEmail(email)) {
    newErrors.email = "อีเมลไม่ถูกต้อง";
    return newErrors;
  }

  if (password.length < 12) {
    newErrors.password = "รหัสผ่านอย่างน้อย 12 ตัวอักษร";
    return newErrors;
  }

  return newErrors;
};
