import React from "react";
import facebookLogo from "../../../public/images/facebookLogo.svg";
import NavComponent from "../homepage/Nav";
import { Link } from "react-router-dom";


function LoginForm() {
  return (
    <>
    <NavComponent />
    <div className="mt-14 ml-96 w-[614px] h-[600px] relative bg-white rounded-lg border border-gray-300">
      {/* Title */}
      <div className="left-[241px] top-[32px] absolute text-center text-blue-950 text-[32px] font-medium font-['Prompt'] leading-[48px]">
        เข้าสู่ระบบ
      </div>

      {/* Login Button */}
      <div className="w-[440px] px-6 py-2.5 left-[87px] top-[304px] absolute rounded-lg justify-center items-center gap-2 inline-flex">
        <button className="btn btn-active btn-primary h-11 px-6 py-2.5 w-[440px]  font-medium font-['Prompt'] text-base text-white leading-normal text-center">
          เข้าสู่ระบบ
        </button>
      </div>

      {/* Email and Password Fields */}
      <div className="h-[164px] left-[87px] top-[96px] absolute flex-col justify-start items-start gap-5 inline-flex">
        {/* Email Field */}
        <div className="h-[80px] flex-col justify-start items-start gap-1 flex">
          <div>
            <span className="text-zinc-700 text-base font-medium font-['Prompt'] leading-normal">
              อีเมล
            </span>
            <span className="text-rose-700 text-base font-medium font-['Prompt'] leading-normal">
              *
            </span>
          </div>
          <div className="w-[440px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
            <input
              type="email"
              placeholder="กรุณากรอกอีเมล"
              className="text-gray-700 text-base font-normal font-['Prompt'] leading-normal outline-none w-full bg-transparent"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
          <div>
            <span className="text-zinc-700 text-base font-medium font-['Prompt'] leading-normal">
              รหัสผ่าน
            </span>
            <span className="text-rose-700 text-base font-medium font-['Prompt'] leading-normal">
              *
            </span>
          </div>
          <div className="w-[440px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <input
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                className="text-gray-700 text-base font-normal font-['Prompt'] leading-normal outline-none w-full bg-transparent"
              />
            </div>
        </div>
      </div>

      {/* Alternative Login Divider */}
      <div className="w-[440px] left-[87px] top-[380px] absolute justify-center items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-px bg-gray-400" />
        <div className="text-center text-gray-700 text-sm font-normal font-['Prompt'] leading-[21px]">
          หรือลงชื่อเข้าใช้ผ่าน
        </div>
        <div className="grow shrink basis-0 h-px bg-gray-400" />
      </div>

      {/* Register Link */}
      <div className="left-[156px] top-[523px] absolute justify-center items-center gap-2 inline-flex">
        <div className="text-center text-gray-700 text-base font-normal font-['Prompt'] leading-normal">
          ยังไม่มีบัญชีผู้ใช้ HomeService?
        </div>
        <Link to="/registerPage" className="text-center text-blue-600 text-base font-semibold font-['Prompt'] underline leading-normal ">
          ลงทะเบียน
        </Link>
      </div>

      {/* Facebook Login */}
      <div className="w-[440px] h-11 px-6 py-2.5 left-[87px] top-[432px] absolute rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <img
            className="w-[23px] h-[22px]"
            src={facebookLogo}
            alt="Facebook Logo"
          />
          <button className="text-blue-600 text-base font-medium font-['Prompt'] leading-normal ">
            เข้าสู่ระบบด้วย Facebook
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
