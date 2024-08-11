import React from "react";
import { useServiceDetail } from "../../context/user-service-detail-context";
import { formatDateTH } from "../../utils/user-detail-format-date";

function UserServiceSummaryMini() {
  const { selectedName, isDate, isTime, isAddress, isSpecify } =
    useServiceDetail();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between">
        <span className="font-prompt text-[14px] text-black">
          9,000 - 18,000 BTU, แบบติดผนัง
        </span>
        <span className="font-prompt text-[14px] text-gray-700">2 รายการ</span>
      </div>
      <hr className="my-[7px] border-[1px] border-gray-300" />
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
              {isAddress} {selectedName.tambon_id} {selectedName.amphure_id}{" "}
              {selectedName.province_id}
            </span>
          </div>
        ) : null}
      </div>
      <hr className="my-[7px] border-[1px] border-gray-300" />
    </div>
  );
}

export default UserServiceSummaryMini;
