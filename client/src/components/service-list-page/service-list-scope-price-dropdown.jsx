import { React, useState } from "react";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../context/filter-context";

function ServiceListScopePriceDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  const [value, setValue] = useState([0, 100]);

  const { setIsUserSlided1, setIsUserSlided2 } = useFilter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsUserSlided1(newValue[0] * 40);
    setIsUserSlided2(newValue[1] * 40);
  };

  return (
    <div className="w-[114px] lg:w-[120px] h-full relative cursor-pointer">
      <div className="w-full h-full flex flex-col" onClick={handleClick}>
        <p className="text-[12px] font-prompt text-gray-700">ราคา</p>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-prompt font-medium text-gray-950 truncate">
            {value[0] * 40} - {value[1] * 40}฿
          </p>
          <img src="/icons/arrow-down-icon.svg" alt="" />
        </div>
      </div>
      {!isOpen ? null : (
        <div className="w-[250px] h-[112px] bg-white mt-[25px] py-[20px] px-[14px] rounded-[8px]">
          <p className="text-[14px] font-prompt text-gray-700">
            {value[0] * 40} - {value[1] * 40}฿
          </p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          ></Slider>
        </div>
      )}
    </div>
  );
}

export default ServiceListScopePriceDropdown;
