import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authentication";
import { loginValidate } from "../../validations/login.validation";

function LoginForm() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = loginValidate(data);
    

    if (Object.keys(newErrors).length === 0) {
      login(data);
    } else {
      alert(Object.values(newErrors)[0]);
    }
  };

  const { email, password } = data;

  return (
    <section className="bg-gray-300 w-screen h-screen flex flex-col justify-center items-center font-prompt">
      <div className="flex flex-col px-4 py-8 text-base leading-8 bg-white rounded-lg border border-gray-300 border-solid max-w-[343px] gap-6 lg:max-w-[614px] lg:h-[511px]">
        <div className="text-xl lg:text-3xl font-bold text-center text-blue-950 lg:mt-3">
          เข้าสู่ระบบ
        </div>
        <form className="lg:pl-12 lg:pr-12" onSubmit={handleSubmit}>
          <label htmlFor="email" className="mt-6 font-medium text-gray-700">
            อีเมล<span className="text-rose-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="กรุณากรอกอีเมล"
            value={email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            className="w-full px-4 py-2.5 mt-1 mb-6 bg-white rounded-lg border border-gray-300 border-solid placeholder-gray-700"
          />
          <p className="text-rose-700"></p>
          <label htmlFor="password" className="mt-6 font-medium text-gray-700">
            รหัสผ่าน <span className="text-rose-700">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="กรุณากรอกรหัสผ่าน"
            value={password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            className="w-full px-4 py-2.5 mt-1 bg-white rounded-lg border border-gray-300 border-solid placeholder-gray-700"
          />
          <p className="text-rose-700"></p>
          <button
            type="submit"
            className="btn btn-active btn-primary px-6 py-2.5 rounded-lg justify-center items-center mt-6 inline-flex w-full lg:mt-9 mb-3"
          >
            เข้าสู่ระบบ
          </button>
          <p className="text-rose-700"></p>
        </form>
        <div className="flex gap-2 justify-center text-base leading-6 text-center">
          <div className="text-gray-700">ยังไม่มีบัญชีผู้ใช้ HomeService?</div>
          <div className="font-semibold text-blue-600 underline">
            <Link to="/auth/register">ลงทะเบียน</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
