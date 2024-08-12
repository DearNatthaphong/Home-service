import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authentication";

function UserHeader() {
  const navigate = useNavigate();
  const { logout, state } = useAuth();
  const [isDropClick, setIsDropClick] = useState(false);
  function handleClick() {
    setIsDropClick(!isDropClick);
  }
  return (
    <>
      {state.user ? (
        <div className="w-full h-[53px] flex items-center justify-center shadow-shadow bg-white fixed z-20 top-0">
          <div className="w-full max-w-[1120px] h-full flex items-center justify-between px-[16px]">
            <div className="flex items-center">
              <button
                className="flex items-center gap-[4px] lg:gap-[8px]"
                onClick={() => {
                  navigate("/home");
                }}
              >
                <img
                  src="/icons/house-icon.png"
                  alt=""
                  className="w-[26px] h-[25px] lg:w-[32px] lg:h-[32px]"
                />
                <p className="font-prompt text-[14px] lg:text-[24px] font-medium text-blue-600">
                  HomeServices
                </p>
              </button>
              <p className="hidden md:flex text-[16px] font-prompt text-black ml-[60px] font-medium">
                บริการของเรา
              </p>
            </div>
            <div className="flex items-center">
              <p className="md:hidden text-black font-prompt text-[14px] mr-[10px]">
                บริการของเรา
              </p>
              {!isDropClick ? (
                <button
                  className="h-[32px] flex items-center justify-center gap-[12px]"
                  onClick={handleClick}
                >
                  <p className="font-prompt hidden md:flex text-[14px] text-gray-700">
                    {state.user.fullName}
                  </p>
                  <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-black rounded-full"></div>
                </button>
              ) : (
                <button
                  className="h-[32px] flex items-center justify-center gap-[12px] relative"
                  onClick={handleClick}
                >
                  <p className="font-prompt hidden md:flex text-[14px] text-gray-700">
                    {state.user.fullName}
                  </p>
                  <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-black rounded-full"></div>
                  <div className="w-[180px] absolute top-[40px] right-[1px] md:right-0 bg-white rounded-[8px] py-[8px]">
                    <div className="w-full h-full gap-[4px] flex flex-col">
                      {/** Option 1 Start */}
                      <div className="w-full h-[33px] flex items-center hover:bg-gray-100 px-[16px] hover:text-gray-950">
                        <div className="w-[16px] h-[16px] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </div>
                        <p className="font-prompt text-[14px] text-gray-800 ml-[12px]">
                          ข้อมูลผู้ใช้
                        </p>
                      </div>
                      {/** Option 1 End */}
                      {/** Option 2 Start */}
                      <div
                        className="w-full h-[33px] flex items-center hover:bg-gray-100 px-[16px] hover:text-gray-950"
                        onClick={() => navigate("/orderlist")}
                      >
                        <div className="w-[16px] h-[16px] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                            />
                          </svg>
                        </div>
                        <p className="font-prompt text-[14px] text-gray-800 ml-[12px]">
                          รายการคำสั่งซ่อม
                        </p>
                      </div>
                      {/** Option 2 End */}
                      {/** Option 3 Start */}
                      <div
                        className="w-full h-[33px] flex items-center hover:bg-gray-100 px-[16px] hover:text-gray-950"
                        onClick={() => navigate("/historylist")}
                      >
                        <div className="w-[16px] h-[16px] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                        <p className="font-prompt text-[14px] text-gray-800 ml-[12px]">
                          ประวัติการซ่อม
                        </p>
                      </div>
                      {/** Option 3 End */}
                      <hr className="border-gray-300" />
                      {/** Option 4 Start */}
                      <div
                        className="w-full h-[33px] flex items-center hover:bg-gray-100 px-[16px] hover:text-gray-950"
                        onClick={() => logout()}
                      >
                        <div className="w-[16px] h-[16px] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                            />
                          </svg>
                        </div>
                        <p className="font-prompt text-[14px] text-gray-800 ml-[12px]">
                          ออกจากระบบ
                        </p>
                      </div>
                      {/** Option 4 End */}
                    </div>
                  </div>
                </button>
              )}

              <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-gray-100 rounded-full flex items-center justify-center ml-[8px] md:ml-[12px]">
                <img src="/icons/bell-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[53px] flex items-center justify-center shadow-shadow bg-white fixed z-10 top-0">
          <div className="w-full max-w-[1120px] h-full flex items-center justify-between px-[16px]">
            <div className="flex items-center">
              <button
                className="flex items-center gap-[4px] lg:gap-[8px]"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src="/icons/house-icon.png"
                  alt=""
                  className="w-[26px] h-[25px] lg:w-[32px] lg:h-[32px]"
                />
                <p className="font-prompt text-[14px] lg:text-[24px] font-medium text-blue-600">
                  HomeServices
                </p>
              </button>
              <p className="hidden md:flex text-[16px] font-prompt text-black ml-[60px] font-medium">
                บริการของเรา
              </p>
            </div>
            <div className="flex items-center">
              <p className="md:hidden text-black font-prompt text-[14px] mr-[10px]">
                บริการของเรา
              </p>
              <button
                className="w-[90px] h-[37px] lg:w-[115px] lg:h-[40px] border-[1px] border-blue-600 rounded-[8px]"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <p className="font-prompt text-[14px] font-medium text-blue-600">
                  เข้าสู่ระบบ
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserHeader;
