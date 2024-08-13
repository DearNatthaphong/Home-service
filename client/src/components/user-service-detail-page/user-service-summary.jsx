import React from 'react';
import { useServiceDetail } from '../../context/user-service-detail-context';
import { formatDateTH } from '../../utils/user-detail-format-date';
import { useAppointment } from '../../context/appointment-context';
import { formatPrice } from '../../utils/price-format';

function UserServiceSummary() {
  const { selectedName, isDate, isTime, isAddress } = useServiceDetail();

  const { orderItems, totalPrice } = useAppointment();

  return (
    <div className="xl:w-1/3">
      <div className="hidden xl:block bg-white border border-b-0 xl:border-b-2 border-gray-300 rounded-b-none rounded-t-lg xl:rounded-b-lg pb-0 mb-0 xl:p-3">
        <div className="text-[16px] mb-3 xl:text-[20px] font-bold text-gray-700">
          สรุปรายการ
        </div>
        {orderItems.map((orderItem) => (
          <p
            className="flex justify-between pb-2 text-gray-700"
            key={orderItem.orderItemId}
          >
            <span className="text-black font-light">
              {orderItem.serviceItemName}
            </span>
            <span className="text-end text-gray-900 font-medium">
              {orderItem.quantity} รายการ
            </span>
          </p>
        ))}
        <div className="w-full h-full">
          {/** ข้อมูล วัน Start */}
          {isDate ? (
            <>
              <hr className="my-[24px] border-[1px] border-gray-300" />
              <div className="flex justify-between mb-[24px]">
                <span className="font-prompt font-light text-[14px] text-gray-700">
                  วันที่
                </span>
                <span className="font-prompt text-[14px] text-black">
                  {formatDateTH(isDate)}
                </span>
              </div>
            </>
          ) : null}
          {/** ข้อมูล วัน Start */}

          {/** ข้อมูล เวลา Start */}
          {isTime ? (
            <div className="flex justify-between mb-[24px]">
              <span className="font-prompt font-light text-[14px] text-gray-700">
                เวลา
              </span>
              <span className="font-prompt text-[14px] text-black">
                {isTime} น.
              </span>
            </div>
          ) : null}
          {/** ข้อมูล เวลา End */}

          {/** ข้อมูล สถานที่ Start */}
          {isAddress || selectedName.province_id ? (
            <div className="flex justify-between">
              <span className="font-prompt font-light text-[14px] text-gray-700">
                สถานที่
              </span>
              <span className="w-full max-w-[190px] text-end font-prompt text-[14px] text-black">
                {isAddress} {selectedName.tambon_id} {selectedName.amphure_id}{' '}
                {selectedName.province_id}
              </span>
            </div>
          ) : null}
          {/** ข้อมูล สถานที่ End */}
        </div>
        <hr className="my-[24px] border-[1px] border-gray-300" />
        {/** ข้อมูล รายจ่ายทั้งหมด Start */}
        <div className="w-full h-full">
          <div className="flex justify-between">
            <span className="font-prompt text-[16px] text-gray-700">รวม</span>
            <span className="font-prompt text-[16px] font-semibold text-black">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
        {/** ข้อมูล รายจ่ายทั้งหมด End */}
      </div>
    </div>
  );
}

export default UserServiceSummary;
