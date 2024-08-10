import { React, useState } from "react";
import { useFilter } from "../../context/filter-context";

function ServiceListTypeDropdown() {
  const { isUserSelected, setIsUserSelected } = useFilter();
  return (
    <div className="w-[114px] lg:w-[120px] h-full">
      <p className="text-[12px] font-prompt text-gray-700">หมวดหมู่บริการ</p>
      <select
        name=""
        id=""
        className="w-full bg-transparent font-prompt text-[16px] text-gray-950 truncate outline-none cursor-pointer"
        value={isUserSelected}
        onChange={(e) => {
          setIsUserSelected(e.target.value);
        }}
      >
        <option value="">บริการทั้งหมด</option>
        <option value="บริการทั่วไป">บริการทั่วไป</option>
        <option value="บริการห้องครัว">บริการห้องครัว</option>
        <option value="บริการห้องน้ำ">บริการห้องน้ำ</option>
      </select>
    </div>
  );
}

export default ServiceListTypeDropdown;
