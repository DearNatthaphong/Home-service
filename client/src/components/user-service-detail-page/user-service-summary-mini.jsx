import React from 'react';
import { useServiceDetail } from '../../context/user-service-detail-context';
import { formatDateTH } from '../../utils/user-detail-format-date';
import { useAppointment } from '../../context/appointment-context';

function UserServiceSummaryMini() {
  const { selectedName, isDate, isTime, isAddress, isSpecify } =
    useServiceDetail();

  const { orderItems } = useAppointment();
  return (
    <div className="w-full h-full flex flex-col">
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
      {orderItems && <hr className="my-[7px] border-[1px] border-gray-300" />}
      <div className="flex flex-col">
        {isDate ? (
          <div className="flex justify-between mb-[4px]">
            <span className="font-prompt font-light text-[14px] text-gray-700">
              วันที่
            </span>
            <span className="font-prompt text-[14px] text-black">
              {formatDateTH(isDate)}
            </span>
          </div>
        ) : null}
        {/** ข้อมูล วัน Start */}

        {/** ข้อมูล เวลา Start */}
        {isTime ? (
          <div className="flex justify-between mb-[4px]">
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
      </div>
      {(isDate || isTime || isAddress) && (
        <hr className="my-[7px] border-[1px] border-gray-300" />
      )}
    </div>
  );
}

export default UserServiceSummaryMini;
