import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminViewPromotionHeader() {
  const [isNameOfPromotion, setIsNameOfPromotion] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getNamePromotion = async () => {
    const results = await axios.get(
      `http://localhost:4000/promotions/${params.promotion_id}`
    );
    setIsNameOfPromotion(results.data.data[0]);
  };

  useEffect(() => {
    getNamePromotion();
  }, []);

  const handleNavigate = () => {
    navigate(
      `/admin/promotion/edit-promotion/${isNameOfPromotion.promotion_id}`
    );
  };

  return (
    <div className="w-full h-full max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between">
      <div className="gap-[14px] h-full max-h-[50px] flex items-center">
        <button
          className="w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => {
            navigate("/admin/promotion");
          }}
        >
          <img src="/icons/left-icon.png" alt="" />
        </button>
        <div className="flex flex-col justify-between">
          <span className="font-prompt text-[12px] text-gray-700">
            Promotion Code
          </span>
          <span className="font-prompt font-medium text-[20px] text-gray-950">
            {isNameOfPromotion.promotion_code}
          </span>
        </div>
      </div>
      <button
        className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center"
        onClick={handleNavigate}
      >
        <span className="font-prompt font-medium text-[16px] text-white">
          แก้ไข
        </span>
      </button>
    </div>
  );
}

export default AdminViewPromotionHeader;
