import React from "react";
import { useNavigate } from "react-router-dom";

function AdminServiceHeader2({ onConfirm }) {
  const navigate = useNavigate();
  const goToServicePage = () => {
    navigate("/admin/service");
  };
  return (
    <div className="w-full h-full min-h-[80px] max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between flex-shrink: 0">
      <span className="font-prompt text-[20px] font-medium text-black">
        เพิ่มบริการ
      </span>
      <div className="flex w-full max-w-[320px] h-full max-h-[45px] justify-around">
        <button
          className="w-full h-full max-w-[130px] max-h-[45px] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-gray-100 active:bg-gray-600 border border-blue-600"
          onClick={goToServicePage}
        >
          <span className="font-prompt font-medium text-[16px] text-blue-600">
            ยกเลิก
          </span>
        </button>
        <button
          className="w-full h-full max-w-[130px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800"
          onClick={onConfirm}
        >
          <span className="font-prompt font-medium text-[16px] text-white">
            สร้าง
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminServiceHeader2;
