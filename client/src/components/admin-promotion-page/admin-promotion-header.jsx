import React from "react";

function AdminPromotionHeader() {
  return (
    <div className="w-full h-full max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between">
      <span className="font-prompt text-[20px] font-medium text-black">
        Promotion Code
      </span>
      <div className="flex w-full max-w-[615px] h-full max-h-[45px] justify-between">
        <form
          action=""
          className="w-full max-w-[350px] h-full max-h-[45px] rounded-[8px] border-[1px] border-gray-300 px-[16px] py-[10px] gap-[10px] flex items-center"
        >
          <div className="flex items-center justify-center w-[24px] h-[24px]">
            <img
              src="/icons/admin-search-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
          </div>
          <input
            type="text"
            className="w-full h-full outline-none bg-transparent placeholder:text-gray-700 placeholder:text-[16px] placeholder:font-prompt placeholder:font-light text-black text-[16px] font-prompt font-light"
            placeholder="ค้นหา Promotion Code..."
          />
        </form>
        <button className="w-full h-full max-w-[240px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800">
          <span className="font-prompt font-medium text-[16px] text-white">
            เพิ่ม Promotion Code
          </span>
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <img src="/icons/plus-icon.svg" alt="" className="" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default AdminPromotionHeader;
