import React from "react";
import facebookLogo from "../../../public/images/facebookLogo.svg";
import NavComponent from "../homepage/Nav";
import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <>
      <NavComponent />
      <div className="mt-14 ml-96 w-[614px] h-[832px] relative bg-white rounded-lg border border-gray-300">
        <div className="left-[236px] top-[32px] absolute text-center text-blue-950 text-[32px] font-medium font-['Prompt'] leading-[48px]">
          ลงทะเบียน
        </div>
        <div className="w-[440px] px-6 py-2.5 left-[87px] top-[555px] absolute rounded-lg justify-center items-center gap-2 inline-flex">
          <button className="btn btn-active btn-primary h-11 px-6 py-2.5 w-[440px]  font-medium font-['Prompt'] text-base text-white leading-normal text-center">
            ลงทะเบียน
          </button>
        </div>
        <div className="left-[87px] top-[96px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
            <div>
              <span className="text-zinc-700 text-base font-medium font-['Prompt'] leading-normal">
                ชื่อ - นามสกุล
              </span>
              <span className="text-rose-700 text-base font-medium font-['Prompt'] leading-normal">
                *
              </span>
            </div>
            <div className="w-[440px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="กรุณากรอกชื่อ นามสกุล"
                className="text-gray-700 text-base font-normal font-['Prompt'] leading-normal outline-none w-full bg-transparent"
              />
            </div>
          </div>
          <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
            <div>
              <span className="text-zinc-700 text-base font-medium font-['Prompt'] leading-normal">
                เบอร์โทรศัพท์
              </span>
              <span className="text-rose-700 text-base font-medium font-['Prompt'] leading-normal">
                *
              </span>
            </div>
            <div className="w-[440px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                className="text-gray-700 text-base font-normal font-['Prompt'] leading-normal outline-none w-full bg-transparent"
              />
            </div>
          </div>
          <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
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
        <div className="w-[440px] left-[87px] top-[631px] absolute justify-center items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-px bg-gray-400" />
          <div className="text-center text-gray-700 text-sm font-normal font-['Prompt'] leading-[21px]">
            หรือลงชื่อเข้าใช้ผ่าน
          </div>
          <div className="grow shrink basis-0 h-px bg-gray-400" />
        </div>
        <div className="w-[440px] h-11 px-6 py-2.5 left-[87px] top-[683px] absolute rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <img
              className="w-[23px] h-[22px]"
              src={facebookLogo}
              alt="Facebook logo"
            />
            <button className="text-blue-600 text-base font-medium font-['Prompt'] leading-normal ">
              เข้าสู่ระบบด้วย Facebook
            </button>
          </div>
        </div>
        <div className="form-control left-[87px] top-[450px] absolute justify-start items-start inline-flex mt-8">
          <label className="label cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
            <span className="checkbox-mark"></span>
            <span className="text-zinc-700 text-base font-normal font-['Prompt'] leading-normal">
              ยอมรับ
            </span>
          </label>
          <div className="flex items-center gap-1 mt-[-32px] ml-[90px]">
            <span className="text-blue-600 text-base font-semibold font-['Prompt'] underline leading-normal">
              ข้อตกลงและเงื่อนไข
            </span>
            <span className="text-zinc-700 text-base font-normal font-['Prompt'] leading-normal">
              และ
            </span>
            <span className="text-blue-600 text-base font-semibold font-['Prompt'] underline leading-normal">
              นโยบายความเป็นส่วนตัว
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="left-[237px] top-[763px] absolute text-blue-600 text-base font-semibold font-['Prompt'] underline leading-normal"
        >
          กลับไปหน้าเข้าสู่ระบบ
        </Link>
      </div>
    </>
  );
}

export default RegisterPage;
