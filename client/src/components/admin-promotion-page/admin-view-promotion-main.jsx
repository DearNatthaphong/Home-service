import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../../utils/admin-promotion-date-time-format";

function AdminViewPromotionMain() {
  const [isChoosePromotion, setIsChoosePromotion] = useState({});
  const params = useParams();

  const getExpDate = isChoosePromotion?.expiry_date?.slice(0, 11);
  const getExpTime = isChoosePromotion?.expiry_time;
  const mergeExp = getExpDate + getExpTime;

  const getPromotion = async () => {
    const results = await axios.get(
      `http://localhost:4000/promotions/${params.promotion_id}`
    );
    setIsChoosePromotion(results.data.data[0]);
  };

  useEffect(() => {
    getPromotion();
  }, []);

  return (
    <div className="w-full h-full p-[40px]">
      <div className="w-full h-full max-h-[540px] rounded-[8px] px-[24px] py-[40px] bg-white border-[1px] border-gray-200 flex flex-col gap-[40px]">
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            Promotion Code
          </p>
          <div className="font-prompt text-[16px] text-black">
            {isChoosePromotion.promotion_code}
          </div>
        </div>
        <div className="flex items-center font-prompt text-[16px] text-black">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ประเภท
          </p>
          {isChoosePromotion?.discount_type?.charAt(0).toUpperCase() +
            isChoosePromotion?.discount_type?.slice(1)}
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ราคาที่ลด
          </p>
          <div className="font-prompt text-[16px] text-red flex items-center">
            <div className="mr-[2px]">-</div>
            {isChoosePromotion.discount}
            {isChoosePromotion?.discount_type === "fixed" ? (
              <p className="ml-[2px]">฿</p>
            ) : (
              <p className="ml-[2px]">%</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ราคาที่ลด
          </span>
          <p className="font-prompt text-[16px] text-black flex items-center">
            <span>0</span>
            <span className="mx-[2px]">/</span>
            {isChoosePromotion.usage_limit}
            <span className="ml-[5px]">ครั้ง</span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            วันหมดอายุ
          </p>
          <p className="font-prompt text-[16px] text-black">
            {formatDate(mergeExp)}
          </p>
        </div>
        <div className="hidden 2xl:flex 2xl:flex-col">
          <hr className="w-full border-[1px] border-gray-300 mb-[40px]" />
          <div className="flex items-center  h-[45px] mb-[12px]">
            <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
              สร้างเมื่อ
            </p>
            <p className="font-prompt text-[16px] text-black">
              {formatDate(isChoosePromotion.created_at)}
            </p>
          </div>
          <div className="flex items-center h-[45px]">
            <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
              แก้ไขล่าสุด
            </p>
            <p className="font-prompt text-[16px] text-black">
              {formatDate(isChoosePromotion.updated_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewPromotionMain;
