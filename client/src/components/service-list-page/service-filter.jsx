import React from "react";
import ServiceListTypeDropdown from "./service-list-type-dropdown";
import ServiceListScopePriceDropdown from "./service-list-scope-price-dropdown";
import ServiceListSortDropdown from "./service-list-sort-dropdown";

function ServiceFilter() {
  return (
    <div className="w-screen h-[135px] lg:h-[85px] bg-white p-[16px] flex items-center justify-center lg:p-[20px] border-b-[1px] border-b-gray-300">
      <div className="w-full max-w-[1130px] h-full flex flex-col items-center justify-between lg:flex-row">
        {/** Search Bar Start */}
        <form className="w-full max-w-[345px] h-[44px] flex justify-between lg:hidden">
          {/** Input Text Box Start */}
          <div className="max-w-[241px] w-full h-[44px] bg-transparent border-[1px] border-gray-300 rounded-[8px] flex items-center px-[15px]">
            <img src="/icons/search-icon.png" alt="" className=" mr-[10px]" />
            <input
              type="text"
              className="bg-transparent placeholder:text-[16px] font-prompt w-full pl-[5px] text-black outline-none"
              placeholder="ค้นหาบริการ"
            />
          </div>
          {/** Input Text Box End */}
          {/** Submit Button Start*/}
          <button
            type="submit"
            className="w-full max-w-[86px] h-[44px] bg-blue-600 rounded-[8px]"
          >
            <p className="font-prompt text-[16px] font-medium text-white">
              ค้นหา
            </p>
          </button>
          {/** Submit Button End*/}
        </form>
        {/** Search Bar End */}
        {/** LG Screen Search Box Start */}
        <div className="hidden lg:flex w-full max-w-[350px] h-full rounded-[8px] border-[1px] border-gray-300 px-[16px] py-[10px]">
          <img
            src="/icons/search-icon.png"
            alt=""
            className="w-[24px] h-[24px] mr-[10px]"
          />
          <input
            type="text"
            className="w-full h-full outline-none bg-transparent text-black text-[16px] font-prompt placeholder:font-prompt placeholder:text-[16px] placeholder:text-gray-600"
            placeholder="ค้นหาบริการ..."
          />
        </div>
        {/** LG Screen Search Box End */}
        {/** Drop Down Section Start */}
        <div className="gap-[11px] h-full w-full max-w-[680px] flex items-center justify-center">
          <div className="w-full max-w-[343px] lg:max-w-[583px] h-[42px] lg:h-full flex items-center lg:justify-between">
            <ServiceListTypeDropdown />
            <hr className="border-[1px] border-gray-300 w-[42px] rotate-90 mx-[-20px]" />
            <ServiceListScopePriceDropdown />
            <hr className="border-[1px] border-gray-300 w-[42px] rotate-90 mx-[-20px]" />
            <ServiceListSortDropdown />
          </div>
          {/** Drop Down Section End */}
          {/** LG Screen Search Button Start */}
          <button className="hidden lg:flex w-full max-w-[86px] h-full items-center justify-center rounded-[8px] bg-blue-600">
            <p className="text-white font-prompt font-medium text-[16px]">
              ค้นหา
            </p>
          </button>
          {/** LG Screen Search Button End */}
        </div>
      </div>
    </div>
  );
}

export default ServiceFilter;
