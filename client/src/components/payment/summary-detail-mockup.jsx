import React from 'react';

function SummaryDetailMockup() {
  return (
    <ul className="divide-y divide-gray-100 pb-0">
      <li className="gap-x-6 py-2 xl:pb-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-black">9,000 - 18,000 BTU, แบบติดผนัง</p>
          <p>2 รายการ</p>
        </div>
      </li>
      <hr />
      <li>
        <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
          <p className="text-gray-700">วันที่</p>
          <p className="text-black">23 เม.ย. 2022</p>
        </div>
        <div className="flex justify-between gap-x-6 py-2">
          <p className="text-gray-700">เวลา</p>
          <p className="text-black">11.00 น.</p>
        </div>
        <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
          <p className="text-gray-700">สถานที่</p>
          <p className="text-black">
            444/4 คอนโดสุภาลัย เสนานิคม <br /> จตุจักร กรุงเทพฯ
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
          <p className="text-black text-end">1,550.00 บาท</p>
        </div>
      </li>
    </ul>
  );
}

export default SummaryDetailMockup;
