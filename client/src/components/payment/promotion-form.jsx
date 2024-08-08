import axios from 'axios';
import { useEffect, useState } from 'react';
// import usePromotions from '../../hooks/use-promotions';
import { useParams } from 'react-router-dom';
import { usePayment } from '../../context/payment-context';

function PromotionForm() {
  const [promotionCodeInput, setPromotionCodeInput] = useState('');

  const { id } = useParams();

  // const { getPromotionByQuery, promotion, updateTotalPrice } = usePromotions();
  const {
    getPromotionByQuery,
    promotion,
    updateTotalPrice,
    updateClientSecret
  } = usePayment();

  const handleChange = (e) => setPromotionCodeInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. ดึงข้อมูล promotion ด้วย query
    const promotionId = await getPromotionByQuery(promotionCodeInput);
    // 2. อัพเดท total price ด้วย orderId และ promotionId
    await updateTotalPrice(promotionId, id);
    // 3. อัพเดท clientSecret ด้วย orderId
    await updateClientSecret(id);
  };

  return (
    // <form action="" className="mt-6" onSubmit={handleSubmit}>
    <div>
      <hr className="mb-3" />
      <label
        htmlFor="promotion"
        className="font-semibold text-[16px] text-gray-900"
      >
        Promotion Code
      </label>
      {!promotion && (
        <div className="flex gap-6 items-center">
          <div className="w-2/3 xl:w-1/2 ">
            <input
              className="w-full bg-transparent placeholder:text-[16px] break-words outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 px-4 py-2.5 mt-1 rounded-lg leading-6 "
              placeholder="กรุณากรอกโค้ดส่วนลด"
              id="promotion"
              name="promotion"
              type="text"
              onChange={handleChange}
              value={promotionCodeInput}
            />
          </div>
          <div className="w-1/3 xl:w-1/6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full btn btn-ghost rounded-lg text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white"
            >
              ใช้โค้ด
            </button>
          </div>
        </div>
      )}
      {promotion && (
        <div className="flex gap-6 items-center">
          <div className="w-2/3 xl:w-1/2 ">
            <input
              className="w-full bg-transparent placeholder:text-[16px] break-words outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 px-4 py-2.5 mt-1 rounded-lg leading-6 "
              placeholder={
                promotion.discountType === 'percent'
                  ? `${promotion.promotionCode} (ส่วนลด ${promotion.discount} %)`
                  : `${promotion.promotionCode} (ส่วนลด ${promotion.discount} บาท)`
              }
              id="promotion"
              name="promotion"
              type="text"
              disabled
            />
          </div>
          <div className="w-1/3 xl:w-1/6"></div>
        </div>
      )}

      <hr className="mt-6" />
    </div>
    // </form>
  );
}

export default PromotionForm;
