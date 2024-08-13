import React, { useEffect, useState } from "react";
import "./admin-promotion.css";
import { usePromotion } from "../../context/promotion-context";
import { formatDate } from "../../utils/admin-promotion-date-time-format";
import { useParams } from "react-router-dom";

function AdminEditPromotionMain() {
  const [isFocusedDiscount, setIsFocusedDiscount] = useState(false);
  const [isFocusedUsage, setIsFocusedUsage] = useState(false);
  const [isFocusedExpiryDate, setIsFocusedExpiryDate] = useState(false);
  const [isFocusedExpiryTime, setIsFocusedExpiryTime] = useState(false);

  const {
    isFixed,
    setIsFixed,

    isPercent,
    setIsPercent,

    isType,
    setIsType,

    isNumFixed,

    isNumPercent,

    getPromotionById,
    isOnePromotion,
    setIsOnePromotion,

    setOpen,
    setKeepId,
  } = usePromotion();

  function handleClickFixed(e) {
    e.preventDefault();
    setIsFixed(!isFixed);
    setIsPercent(!isPercent);
    if (!isFixed === true) {
      setIsType("fixed");
      setIsOnePromotion({ ...isOnePromotion, discount_type: "fixed" });
    } else {
      setIsType("percent");
    }
  }

  function handleClickPercent(e) {
    e.preventDefault();
    setIsPercent(!isPercent);
    setIsFixed(!isFixed);
    if (!isPercent === true) {
      setIsType("percent");
      setIsOnePromotion({ ...isOnePromotion, discount_type: "percent" });
    } else {
      setIsType("fixed");
    }
  }

  const params = useParams();

  useEffect(() => {
    getPromotionById(params.promotion_id);
  }, []);

  return (
    <div className="w-full h-full px-[40px] pt-[10px] 2xl:p-[40px] flex flex-col ">
      <form className="w-full h-full max-h-[390px] 2xl:max-h-[610px] rounded-[8px] px-[24px] py-[40px] bg-white flex flex-col gap-[40px] border-[1px] border-gray-200">
        {/** Promotion Code Section Start */}
        <div className="w-full max-w-[665px] h-full max-h-[45px] flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700">
            Promotion Code
          </span>
          <input
            type="text"
            className="w-full max-w-[433px] h-full bg-transparent outline-none border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] text-[16px] font-prompt font-medium text-black focus:border-blue-600"
            value={isOnePromotion.promotion_code}
            onChange={(e) => {
              setIsOnePromotion({
                ...isOnePromotion,
                promotion_code: e.target.value
                  .replace(/\s+/g, "")
                  .toUpperCase(),
              });
            }}
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
            <div className="w-full max-w-[268px] h-full max-h-[45px]">
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
                  <div
                    className={`w-full max-w-[140px] h-full max-h-[45px] rounded-[6px] flex items-center pr-[10px] ${
                      isFocusedDiscount
                        ? "border-[1px] border-blue-600"
                        : "border-[1px] border-gray-300"
                    }`}
                  >
                    <input
                      type="number"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center font-prompt text-black"
                      value={isOnePromotion.discount}
                      onChange={(e) => {
                        setIsOnePromotion({
                          ...isOnePromotion,
                          discount: e.target.value,
                        });
                      }}
                      onFocus={() => setIsFocusedDiscount(true)}
                      onBlur={() => setIsFocusedDiscount(false)}
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
                      type="number"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                      value={isNumFixed}
                      disabled
                    />
                    <span className="font-prompt text-[16px] text-gray-500 ml-[10px]">
                      ฿
                    </span>
                  </div>
                </div>
              )}
            </div>

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
                  <div
                    className={`w-full max-w-[140px] h-full max-h-[45px] rounded-[6px] flex items-center pr-[10px] ${
                      isFocusedDiscount
                        ? "border-[1px] border-blue-600"
                        : "border-[1px] border-gray-300"
                    }`}
                  >
                    <input
                      type="number"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center font-prompt text-black"
                      value={isOnePromotion.discount}
                      onChange={(e) => {
                        setIsOnePromotion({
                          ...isOnePromotion,
                          discount: e.target.value,
                        });
                      }}
                      onFocus={() => setIsFocusedDiscount(true)}
                      onBlur={() => setIsFocusedDiscount(false)}
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
                      type="number"
                      className="w-full h-full bg-transparent outline-none px-[10px] flex items-center"
                      value={isNumPercent}
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
          <div
            className={`w-full max-w-[433px] h-full max-h-[45px] rounded-[8px] flex items-center pr-[16px] ${
              isFocusedUsage
                ? "border-[1px] border-blue-600"
                : "border-[1px] border-gray-300"
            }`}
          >
            <input
              type="number"
              className="w-full h-full outline-none bg-transparent pl-[16px] py-[10px] text-black font-prompt font-medium text-[16px]"
              value={isOnePromotion.usage_limit}
              onChange={(e) => {
                setIsOnePromotion({
                  ...isOnePromotion,
                  usage_limit: e.target.value,
                });
              }}
              onFocus={() => setIsFocusedUsage(true)}
              onBlur={() => setIsFocusedUsage(false)}
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
          <div className="w-full max-w-[433px] h-full max-h-[45px] flex justify-between ">
            {/** Date Start */}
            <div
              className={`w-full max-w-[205px] h-full max-h-[45px] rounded-[8px] ${
                isFocusedExpiryDate
                  ? "border-[1px] border-blue-600"
                  : "border-[1px] border-gray-300"
              }`}
            >
              <input
                type="date"
                className="w-full max-w-[205px] h-full max-h-[45px] px-[10px] py-[10px] text-black bg-transparent outline-none font-prompt text-[16px]"
                value={
                  isOnePromotion.expiry_date &&
                  isOnePromotion.expiry_date.slice(0, 10)
                }
                onChange={(e) => {
                  setIsOnePromotion({
                    ...isOnePromotion,
                    expiry_date: e.target.value,
                  });
                }}
                onFocus={() => setIsFocusedExpiryDate(true)}
                onBlur={() => setIsFocusedExpiryDate(false)}
              />
            </div>
            {/** Time Start */}
            <div
              className={`w-full max-w-[205px] h-full max-h-[45px] rounded-[8px] ${
                isFocusedExpiryTime
                  ? "border-[1px] border-blue-600"
                  : "border-[1px] border-gray-300"
              }`}
            >
              <input
                type="time"
                className="w-full max-w-[205px] h-full max-h-[45x] px-[10px] py-[10px] text-black bg-transparent outline-none font-prompt text-[16px]"
                value={isOnePromotion.expiry_time}
                onChange={(e) => {
                  setIsOnePromotion({
                    ...isOnePromotion,
                    expiry_time: e.target.value,
                  });
                }}
                onFocus={() => setIsFocusedExpiryTime(true)}
                onBlur={() => setIsFocusedExpiryTime(false)}
              />
            </div>
          </div>
        </div>
        {/** Exp Date Section End */}
        <div className="hidden 2xl:flex 2xl:flex-col w-full">
          <hr className="w-full border-[1px] border-gray-300 mb-[40px]" />
          <div className="flex flex-col gap-[12px] w-full max-w-[390px] h-full max-h-[100px]">
            <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
              <span className="font-prompt font-medium text-[16px] text-gray-700">
                สร้างเมื่อ
              </span>
              <span className="font-prompt text-[16px] text-gray-900">
                {formatDate(isOnePromotion.created_at)}
              </span>
            </div>
            <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
              <span className="font-prompt font-medium text-[16px] text-gray-700">
                แก้ไขล่าสุด
              </span>
              <span className="font-prompt text-[16px] text-gray-900">
                {formatDate(isOnePromotion.updated_at)}
              </span>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-[10px] 2xl:mt-[24px] flex justify-end">
        <button
          className="flex gap-[8px]"
          onClick={() => {
            setOpen(true);
            setKeepId(isOnePromotion.promotion_id);
          }}
        >
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="/icons/trash-icon.png" alt="" />
          </div>
          <span className="font-prompt font-semibold text-[16px] text-gray-600">
            ลบ Promotion Code
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminEditPromotionMain;
