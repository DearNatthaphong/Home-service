import React from "react";
import { useFilter } from "../../context/filter-context";

function ServiceListSortDropdown() {
  const { isUserSort, setIsUserSort } = useFilter();
  return (
    <div className="w-[114px] lg:w-[215px] h-full pl-[10px] lg:pl-[0px]">
      <div className="w-full h-full">
        <p className="text-[12px] font-prompt text-gray-700">เรียงตาม</p>
        <select
          name=""
          id=""
          className="w-full bg-transparent font-prompt text-[16px] text-gray-950 truncate outline-none cursor-pointer"
          value={isUserSort}
          onChange={(e) => {
            setIsUserSort(e.target.value);
          }}
        >
          <option value="">บริการแนะนำ</option>
          <option value="ยอดนิยม">บริการยอดนิยม</option>
          <option value="น้อย1" className="md:hidden">
            ตามตัวอักษร...
          </option>
          <option value="มาก1" className="md:hidden">
            ตามตัวอักษร...
          </option>
          <option value="น้อย2" className="hidden md:flex">
            ตามตัวอักษร (Ascending)
          </option>
          <option value="มาก2" className="hidden md:flex">
            ตามตัวอักษร (Descending)
          </option>
        </select>
      </div>
    </div>
  );
}

export default ServiceListSortDropdown;
