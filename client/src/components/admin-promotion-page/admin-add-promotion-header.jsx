import React from "react";
import { useNavigate } from "react-router-dom";
import { usePromotion } from "../../context/promotion-context";

function AdminAddPromotionHeader() {
  const navigate = useNavigate();
  const { createPromotion } = usePromotion();
  return (
    <div className="w-full h-full max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between">
      <span className="font-prompt text-[20px] font-medium text-black">
        เพิ่ม Promotion Code
      </span>
      <div className="flex w-full max-w-[250px] h-full max-h-[45px] justify-between">
        <button
          className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-white border-[1px] border-blue-600 flex items-center justify-center"
          onClick={() => {
            navigate("/admin/promotion");
          }}
        >
          <span className="font-prompt font-medium text-[16px] text-blue-600">
            ยกเลิก
          </span>
        </button>
        <button
          className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center"
          type="submit"
          onClick={() => {
            createPromotion();
          }}
        >
          <span className="font-prompt font-medium text-[16px] text-white">
            สร้าง
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminAddPromotionHeader;
