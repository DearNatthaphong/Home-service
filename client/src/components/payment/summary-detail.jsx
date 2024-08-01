import React from 'react';
import SummaryDetailMockup from './summary-detail-mockup';
import { formatThaiDate, formatThaiTime } from '../../utils/date-time-format';
import { formatPrice } from '../../utils/price-format';

function SummaryDetail({ details }) {
  if (!details) {
    return <SummaryDetailMockup />;
  }

  const {
    serviceDate,
    serviceTime,
    address,
    district,
    subdistrict,
    province,
    orderItems = [],
    totalPrice
  } = details;

  const formattedDate = formatThaiDate(serviceDate);
  const formattedTime = formatThaiTime(serviceTime);
  const formattedPrice = formatPrice(totalPrice);

  return (
    <ul className="divide-y divide-gray-100 pb-0">
      <li className="gap-x-6 py-2 xl:pb-4 flex flex-col gap-2">
        {orderItems.map((item) => (
          <div key={item.orderItemId} className="flex justify-between">
            <p className="text-black">{item.serviceName}</p>
            <p className="text-end">{item.quantity} รายการ</p>
          </div>
        ))}
      </li>
      <hr />
      <li>
        <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
          <p className="text-gray-700">วันที่</p>
          <p className="text-black text-end">{formattedDate}</p>
        </div>
        <div className="flex justify-between gap-x-6 py-2">
          <p className="text-gray-700">เวลา</p>
          <p className="text-black text-end">{formattedTime}</p>
        </div>
        <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
          <p className="text-gray-700 text-start">สถานที่</p>
          <p className="text-black">
            {address}, {subdistrict} <br /> {district} {province}
          </p>
        </div>
      </li>
      <hr />
      <li>
        <div className="flex justify-between gap-x-6 pt-2 xl:pt-4">
          <p className="test-gray-700">Promotion Code</p>
          <p className="text-red text-end">-50.00 บาท</p>
        </div>
        <div className="flex justify-between gap-x-6 py-4">
          <p className="test-gray-700">รวม</p>
          <p className="text-black text-end">{formattedPrice}</p>
        </div>
      </li>
    </ul>
  );
}

export default SummaryDetail;
