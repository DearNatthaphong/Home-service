import React from "react";

function ServiceListSortDropdown() {
  return (
    <div className="w-[114px] lg:w-[215px] h-full pl-[10px] lg:pl-[0px]">
      <div className="w-full h-full">
        <p className="text-[12px] font-prompt text-gray-700">เรียงตาม</p>
        <select
          name=""
          id=""
          className="w-full bg-transparent font-prompt text-[16px] text-gray-950 truncate outline-none"
        >
          <option value="">บริการแนะนำ</option>
          <option value="">บริการยอดนิยม</option>
          <option value="" className="md:hidden">
            ตามตัวอักษร...
          </option>
          <option value="" className="md:hidden">
            ตามตัวอักษร...
          </option>
          <option value="" className="hidden md:flex">
            ตามตัวอักษร (Ascending)
          </option>
          <option value="" className="hidden md:flex">
            ตามตัวอักษร (Descending)
          </option>
        </select>
      </div>
    </div>
  );
}

export default ServiceListSortDropdown;
