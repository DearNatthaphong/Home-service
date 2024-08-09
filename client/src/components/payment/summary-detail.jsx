import React from 'react';
import SummaryDetailMockup from './summary-detail-mockup';
import { formatThaiDate, formatThaiTime } from '../../utils/date-time-format';
// import usePromotions from '../../hooks/use-promotions';
import { usePayment } from '../../context/payment-context';
import { formatPrice } from '../../utils/price-format';

function SummaryDetail({ details, isSummary }) {
  if (!details) {
    return <SummaryDetailMockup />;
  }
  // const { promotion } = usePromotions();
  const { promotion } = usePayment();

  const {
    serviceDate,
    serviceTime,
    address,
    district,
    subdistrict,
    province,
    totalPrice,
    orderItems = []
  } = details;

  const formattedDate = formatThaiDate(serviceDate);
  const formattedTime = formatThaiTime(serviceTime);
  const formattedPrice = formatPrice(totalPrice);

  return (
    <ul className="text-sm">
      <li className="md:pb-4 flex flex-col border-b-2 border-gray-300">
        {orderItems.map((item) => (
          <p
            key={item.orderItemId}
            className="flex justify-between pb-2 text-gray-700"
          >
            <span className="text-black">{item.serviceName}</span>
            <span className="text-end">{item.quantity} รายการ</span>
          </p>
        ))}
      </li>
      <li className=" border-b-2 border-gray-300 py-2 md:py-4">
        <p className="flex justify-between gap-x-6 py-1 xl:pt-4">
          <span className="text-gray-700">วันที่</span>
          <span className="text-black text-end">{formattedDate}</span>
        </p>
        <p className="flex justify-between gap-x-6 py-1">
          <span className="text-gray-700">เวลา</span>
          <span className="text-black text-end">{formattedTime}</span>
        </p>
        <p className="flex justify-between gap-x-6 py-1 xl:pb-4 text-end">
          <span className="text-gray-700 text-start">สถานที่</span>
          <span className="text-black text-end">
            {address}, {subdistrict} <br /> {district} {province}
          </span>
        </p>
      </li>
      {isSummary && promotion && (
        <li className="border-none py-2">
          <div className="text-sm flex justify-between gap-x-6 xl:pt-4">
            <div className="test-gray-700">ราคาก่อนหักส่วนลด</div>
            <div className="text-end">{formattedPrice}</div>
          </div>
          <div className="text-sm flex justify-between gap-x-6 xl:pt-4">
            <div className="test-gray-700">Promotion Code</div>
            <div className="text-red text-end">
              {promotion.discountType === 'fixed'
                ? `-  ${promotion.discount} บาท`
                : `- ${formatPrice(
                    (Number(totalPrice) * Number(promotion.discount)) / 100
                  )}`}
            </div>
          </div>
        </li>
      )}
    </ul>
  );
}

export default SummaryDetail;
