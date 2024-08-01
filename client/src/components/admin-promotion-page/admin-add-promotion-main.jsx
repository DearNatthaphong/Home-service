import React, { useState } from "react";

function AdminAddPromotionMain() {
  const [isFixed, setIsFixed] = useState(true);
  const [isPercent, setIsPercent] = useState(false);
  function handleClickFixed() {
    setIsFixed(!isFixed);
    setIsPercent(!isPercent);
  }
  function handleClickPercent() {
    setIsPercent(!isPercent);
    setIsFixed(!isFixed);
  }

  return (
    <div className="w-full h-full p-[40px] flex justify-center">
      <div className="w-full h-full max-h-[430px] rounded-[8px] px-[24px] py-[40px] bg-white flex flex-col gap-[40px]">
        {/** Promotion Code Section Start */}
        <div className="w-full max-w-[665px] h-full max-h-[45px] flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700">
            Promotion Code
          </span>
          <input
            type="text"
            className="w-full max-w-[433px] h-full bg-transparent outline-none border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] text-[16px] font-prompt font-medium text-black"
          />
        </div>
        {/** Promotion Code Section End */}
        {/** Type Section Start */}
        <div className="w-full max-w-[800px] 2xl:max-w-[500px] h-full max-h-[45px] 2xl:max-h-[96px] flex items-center 2xl:items-start justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700">
            ประเภท
          </span>
          <div className="flex 2xl:flex-col gap-[12px] w-full max-w-[568px] 2xl:max-w-[268px] h-full justify-between">
            {/** Type Fixed Section Start */}
            {isFixed ? (
              <div className="w-full max-w-[268px] h-full max-h-[45px] flex items-center justify-between">
                <div className="w-full max-w-[69px] h-full max-h-[21px] flex items-center justify-between">
                  <button
                    className="w-[20px] h-[20px] rounded-full bg-blue-600 flex items-center justify-center"
                    onClick={handleClickFixed}
                  >
                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                  </button>
                  <span className="font-prompt text-[14px] text-black">
                    Fixed
                  </span>
                </div>
                <div className="w-full max-w-[140px] h-full max-h-[45px] border-[1px] border-gray-300 rounded-[6px] flex items-center pr-[10px]">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                  />
                  <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
                    ฿
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[268px] h-full max-h-[45px] flex items-center justify-between">
                <div className="w-full max-w-[69px] h-full max-h-[21px] flex items-center justify-between">
                  <button
                    className="w-[20px] h-[20px] rounded-full border-[1px] border-gray-300"
                    onClick={handleClickFixed}
                  ></button>
                  <span className="font-prompt text-[14px] text-gray-700">
                    Fixed
                  </span>
                </div>
                <div className="w-full max-w-[140px] h-full max-h-[45px] border-[1px] border-gray-300 rounded-[6px] flex items-center pr-[10px] bg-gray-100">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                    disabled
                  />
                  <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
                    ฿
                  </span>
                </div>
              </div>
            )}

            {/** Type Fixed Section End */}
            {/** Type Percent Section Start */}
            <div className="w-full max-w-[268px] h-full max-h-[45px]">
              {isPercent ? (
                <div className="w-full max-w-[268px] h-full max-h-[45px] flex items-center justify-between">
                  <div className="w-full max-w-[84px] h-full max-h-[21px] flex items-center justify-between">
                    <button
                      className="w-[20px] h-[20px] rounded-full bg-blue-600 flex items-center justify-center"
                      onClick={handleClickPercent}
                    >
                      <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                    </button>
                    <span className="font-prompt text-[14px] text-black">
                      Percent
                    </span>
                  </div>
                  <div className="w-full max-w-[140px] h-full max-h-[45px] border-[1px] border-gray-300 rounded-[6px] flex items-center pr-[10px]">
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                    />
                    <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
                      %
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[268px] h-full max-h-[45px] flex items-center justify-between">
                  <div className="w-full max-w-[84px] h-full max-h-[21px] flex items-center justify-between">
                    <button
                      className="w-[20px] h-[20px] rounded-full border-[1px] border-gray-300"
                      onClick={handleClickPercent}
                    ></button>
                    <span className="font-prompt text-[14px] text-gray-700">
                      Percent
                    </span>
                  </div>
                  <div className="w-full max-w-[140px] h-full max-h-[45px] border-[1px] border-gray-300 rounded-[6px] flex items-center pr-[10px] bg-gray-100">
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                      disabled
                    />
                    <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
                      %
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/** Type Percent Section End */}
          </div>
        </div>
        {/** Type Section End */}
        {/** Quota Section Start*/}
        <div className="w-full max-w-[665px] h-full max-h-[45px] flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700">
            โควต้าการใช้
          </span>
          <div className="w-full max-w-[433px] h-full max-h-[45px] border-[1px] border-gray-300 rounded-[8px] flex items-center pr-[16px]">
            <input
              type="text"
              className="w-full h-full outline-none bg-transparent pl-[16px] py-[10px] text-black font-prompt font-medium text-[16px]"
            />
            <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
              ครั้ง
            </span>
          </div>
        </div>
        {/** Quota Section End */}
        {/** Exp Date Section Start */}
        <div className="w-full max-w-[665px] h-full max-h-[45px] flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700">
            วันหมดอายุ
          </span>
          <div className="w-full max-w-[433px] h-full max-h-[45px] flex justify-between">
            <div className="w-full max-w-[205px] h-full bg-red"></div>
            <div className="w-full max-w-[205px] h-full bg-green-500"></div>
          </div>
        </div>
        {/** Exp Date Section End */}
      </div>
    </div>
  );
}

export default AdminAddPromotionMain;
