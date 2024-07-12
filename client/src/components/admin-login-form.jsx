import React, { useState } from "react";
import { useAuth } from "../context/authentication";
import { adminLoginValidate } from "../validations/admin-login-validations";
import { toast } from "react-toastify";

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { adminLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = adminLoginValidate(email, password);

    if (Object.keys(newErrors).length === 0) {
      adminLogin({
        email,
        password,
      });
    } else {
      toast.error(Object.values(newErrors)[0]);
    }
  };

  const css = {
    styleTextLabel: "font-prompt text-[16px] font-medium text-black",
    styleTestLabelStar: "font-prompt text-[16px] font-medium text-red",
    styleInputBox:
      "w-[440px] h-[44px] bg-white border-[1px] border-gray-300 rounded-[8px] text-black pl-[10px]",
  };

  return (
    <form
      className="w-full max-w-[614px] h-[498px] bg-white rounded-[8px] border-[1px] border-gray-300 flex items-center justify-center flex-col"
      onSubmit={handleSubmit}
    >
      {/** Section Text Header Start */}
      <span className="text-blue-950 font-prompt text-[32px] font-medium mb-[13px]">
        เข้าสู่ระบบแอดมิน
      </span>
      {/** Section Text Header End */}
      {/** Section Login Form Start */}
      <div className="flex flex-col gap-[20px]">
        {/** Section Email Start */}
        <section className="flex flex-col gap-[4px]">
          <label htmlFor="" className={css.styleTextLabel}>
            Email
            <span className={css.styleTestLabelStar}>*</span>
          </label>
          <input
            type="text"
            className={css.styleInputBox}
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </section>
        {/** Section Email End */}
        {/** Section Password Start */}
        <section className="flex flex-col gap-[4px]">
          <label htmlFor="" className={css.styleTextLabel}>
            Password
            <span className={css.styleTestLabelStar}>*</span>
          </label>
          <input
            type="password"
            className={css.styleInputBox}
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </section>
        {/** Section Password End */}
      </div>
      {/** Section Login Form End */}
      {/** Section Button To Login Start */}
      <button
        type="submit"
        className="w-full max-w-[440px] h-[44px] bg-blue-600 rounded-[8px] mt-[45px]"
      >
        <span className="font-prompt text-[16px] font-medium text-white">
          เข้าสู่ระบบ
        </span>
      </button>
      {/** Section Button To Login End */}
    </form>
  );
}

export default AdminLoginForm;
