import React from 'react';

function SummaryDetailMockup() {
  return (
    <ul className="text-sm">
      <li className="gap-x-6 xl:pb-4 flex flex-col gap-2 border-b-2 border-gray-300">
        <div className="flex justify-between pb-2 text-gray-700">
          <p className="text-black">9,000 - 18,000 BTU, แบบติดผนัง</p>
          <p className="text-end">2 รายการ</p>
        </div>
      </li>
      <li className=" border-b-2 border-gray-300 py-2">
        <div className="flex justify-between gap-x-6 xl:py-2 xl:pt-4 text-gray-700">
          <p className="">วันที่</p>
          <p className="text-black">23 เม.ย. 2022</p>
        </div>
        <div className="flex justify-between gap-x-6 py-1 xl:py-2 text-gray-700">
          <p className="">เวลา</p>
          <p className="text-black">11.00 น.</p>
        </div>
        <div className="flex justify-between gap-x-6 xl:py-2 xl:pb-4 text-gray-700">
          <p className="">สถานที่</p>
          <p className="text-black text-end">
            444/4 คอนโดสุภาลัย เสนานิคม1 <br /> จตุจักร กรุงเทพฯ
          </p>
        </div>
      </li>
      <li className="border-none py-2">
        <div className="text-sm flex justify-between gap-x-6 xl:pt-4">
          <p className="test-gray-700">Promotion Code</p>
          <p className="text-red text-end">-50.00 บาท</p>
        </div>
      </li>
    </ul>
  );
}

export default SummaryDetailMockup;
