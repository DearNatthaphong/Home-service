import React from "react";
import { useAuth } from "../context/authentication";
import logoutIcon from "/icons/logout-icon.png";
import axios from "axios";

function AdminHomePage() {
  const { adminLogout } = useAuth();
  return (
    <div className="w-screen h-screen bg-background flex">
      <section className="w-[240px] h-screen bg-blue-950 flex flex-col">
        <header className="w-full h-[106px] "></header>
        <section className="h-full flex flex-col justify-between">
          <div className="w-full h-[170px] "></div>
          <button
            className="w-full h-[54px] mb-[50px] flex items-center justify-center"
            onClick={() => adminLogout()}
          >
            <img src={logoutIcon} alt="" />
            <p className="text-[16px] font-prompt text-white ml-[16px]">
              ออกจากระบบ
            </p>
          </button>
        </section>
      </section>
      <div className="w-full h-screen flex flex-col">
        <header className="w-full h-[80px] bg-white border-b-[1px] border-gray-300 flex items-center justify-between px-[40px]">
          <p className="text-[20px] font-prompt text-black">หมวดหมู่</p>
          <div className="w-[540px] h-[45px] flex items-center justify-between">
            <div className="w-[350px] h-[45px] flex rounded-[8px] border-[1px] border-gray-300">
              <div className="w-[50px] h-[45px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-[300px] h-[44px] outline-none bg-transparent placeholder:font-prompt placeholder:text-gray-700 placeholder:text-[16px]"
                placeholder="ค้นหาหมวดหมู่..."
              />
            </div>
            <button className="w-[165px] h-[45px] bg-blue-600 rounded-[8px]">
              <p className="text-white font-prompt">เพิ่มหมวดหมู่ +</p>
            </button>
          </div>
        </header>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[1120px] h-[305px] mt-[40px] rounded-[8px]">
            <div className="w-full h-[40px] bg-gray-100 flex justify-end">
              <div className="w-[80px] h-full font-prompt text-[14px] text-gray-700 flex items-center pl-[24px]">
                ลำดับ
              </div>
              <div className="w-[260px] h-full font-prompt text-[14px] text-gray-700 flex items-center pl-[24px]">
                ชื่อหมวดหมู่
              </div>
              <div className="w-[245px] h-full font-prompt text-[14px] text-gray-700 flex items-center pl-[24px]">
                สร้างเมื่อ
              </div>
              <div className="w-[355px] h-full font-prompt text-[14px] text-gray-700 flex items-center pl-[24px]">
                แก้ไขล่าสุด
              </div>
              <div className="w-[120px] h-full font-prompt text-[14px] text-gray-700 flex items-center pl-[24px]r">
                Action
              </div>
            </div>
            <div className="w-full h-[88px] bg-white flex justify-end">
              <div className="w-[80px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                1
              </div>
              <div className="w-[260px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                บริการทั่วไป
              </div>
              <div className="w-[245px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[355px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[120px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                <div className=" flex gap-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="w-[24px] h-[24px] cursor-pointer text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="text-blue-600 w-[24px] h-[24px] cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-[88px] bg-white flex justify-end">
              <div className="w-[80px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                2
              </div>
              <div className="w-[260px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                บริการห้องครัว
              </div>
              <div className="w-[245px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[355px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[120px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                <div className=" flex gap-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="w-[24px] h-[24px] cursor-pointer text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="text-blue-600 w-[24px] h-[24px] cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-[88px] bg-white flex justify-end">
              <div className="w-[80px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                3
              </div>
              <div className="w-[260px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                บริการห้องน้ำ
              </div>
              <div className="w-[245px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[355px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                12/02/2022 10:30PM
              </div>
              <div className="w-[120px] h-full font-prompt text-[14px] text-black flex items-center pl-[24px]">
                <div className=" flex gap-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="w-[24px] h-[24px] cursor-pointer text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    className="text-blue-600 w-[24px] h-[24px] cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
