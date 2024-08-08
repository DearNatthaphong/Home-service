import React from "react";

function AdminViewCategoryHeader() {
  return (
    <div className="w-full h-full max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between">
      <div className="gap-[14px] h-full max-h-[50px] flex items-center">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="/icons/left-icon.png" alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-prompt text-[12px] text-gray-700">
            Promotion Code
          </span>
          <span className="font-prompt font-medium text-[20px] text-gray-950">
            {/** ด้านล่างนี้แสดง หมวดหมู่ พึ่งแก้ไขเสร็จ */}
            {/* {isOnePromotion.promotion_code} */}
            {/** ด้านบนนี้แสดง หมวดหมู่ พึ่งแก้ไขเสร็จ */}
          </span>
        </div>
      </div>
      <button
        className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center"
        // onClick={() => {
        //   navigate(
        //     `/admin/promotion/edit-promotion/${isOnePromotion.promotion_id}`
        //   );
        // }}
      >
        <span className="font-prompt font-medium text-[16px] text-white">
          แก้ไข
        </span>
      </button>
    </div>
  );
}

export default AdminViewCategoryHeader;
