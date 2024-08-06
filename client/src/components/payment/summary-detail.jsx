import React from 'react';
import SummaryDetailMockup from './summary-detail-mockup';
import { formatThaiDate, formatThaiTime } from '../../utils/date-time-format';

function SummaryDetail({ details, isSummary }) {
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
    orderItems = []
  } = details;

  const formattedDate = formatThaiDate(serviceDate);
  const formattedTime = formatThaiTime(serviceTime);

  return (
    <ul className="text-sm">
      <li className="md:pb-4 flex flex-col border-b-2 border-gray-300">
        {orderItems.map((item) => (
          <div
            key={item.orderItemId}
            className="flex justify-between pb-2 text-gray-700"
          >
            <p className="text-black">{item.serviceName}</p>
            <p className="text-end">{item.quantity} รายการ</p>
          </div>
        ))}
      </li>
      <li className=" border-b-2 border-gray-300 py-2 md:py-4">
        <div className="flex justify-between gap-x-6 py-1 xl:pt-4">
          <p className="text-gray-700">วันที่</p>
          <p className="text-black text-end">{formattedDate}</p>
        </div>
        <div className="flex justify-between gap-x-6 py-1">
          <p className="text-gray-700">เวลา</p>
          <p className="text-black text-end">{formattedTime}</p>
        </div>
        <div className="flex justify-between gap-x-6 py-1 xl:pb-4 text-end">
          <p className="text-gray-700 text-start">สถานที่</p>
          <p className="text-black text-end">
            {address}, {subdistrict} <br /> {district} {province}
          </p>
        </div>
      </li>
      {isSummary && (
        <li className="border-none py-2">
          <div className="text-sm flex justify-between gap-x-6 xl:pt-4">
            <p className="test-gray-700">Promotion Code</p>
            <p className="text-red text-end">-50.00 บาท</p>
          </div>
        </li>
      )}
    </ul>
  );
}

export default SummaryDetail;
