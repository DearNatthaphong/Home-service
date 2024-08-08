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
      <section className="w-full h-full max-h-[540px] rounded-[8px] px-[24px] py-[40px] bg-white border-[1px] border-gray-200 flex flex-col gap-[40px]">
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            Promotion Code
          </p>
          <span className="font-prompt text-[16px] text-black">
            {isChoosePromotion.promotion_code}
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ประเภท
          </p>
          <span className="font-prompt text-[16px] text-black">
            {isChoosePromotion?.discount_type?.charAt(0).toUpperCase() +
              isChoosePromotion?.discount_type?.slice(1)}
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ราคาที่ลด
          </p>
          <span className="font-prompt text-[16px] text-red">
            <span className="mr-[2px]">-</span>
            {isChoosePromotion.discount}
            {isChoosePromotion?.discount_type === "fixed" ? (
              <span className="ml-[2px]">฿</span>
            ) : (
              <span className="ml-[2px]">%</span>
            )}
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ราคาที่ลด
          </p>
          <span className="font-prompt text-[16px] text-black">
            <span>0</span>
            <span className="mx-[2px]">/</span>
            {isChoosePromotion.usage_limit}
            <span className="ml-[5px]">ครั้ง</span>
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            วันหมดอายุ
          </p>
          <span className="font-prompt text-[16px] text-black">
            {formatDate(mergeExp)}
          </span>
        </div>
        <div className="hidden 2xl:flex 2xl:flex-col">
          <hr className="w-full border-[1px] border-gray-300 mb-[40px]" />
          <div className="flex items-center  h-[45px] mb-[12px]">
            <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
              สร้างเมื่อ
            </p>
            <span className="font-prompt text-[16px] text-black">
              {formatDate(isChoosePromotion.created_at)}
            </span>
          </div>
          <div className="flex items-center h-[45px]">
            <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
              แก้ไขล่าสุด
            </p>
            <span className="font-prompt text-[16px] text-black">
              {formatDate(isChoosePromotion.updated_at)}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminViewPromotionMain;
