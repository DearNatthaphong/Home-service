import React from "react";

function UserFooter() {
  return (
    <div className="w-screen h-full max-h-[389px] lg:max-h-[193px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[375px] lg:max-w-[1142px] h-[273px] lg:h-[151px] px-[16px] py-[24px]">
        <div className="w-full h-full flex flex-col justify-between lg:flex-row lg:items-center">
          {/** Logo Icon Start */}
          <div className="flex items-center">
            <img
              src="/icons/house-icon.png"
              alt=""
              className="w-[39px] h-[39px]"
            />
            <p className="font-prompt font-medium text-[29px] text-blue-600">
              HomeServices
            </p>
          </div>
          {/** Logo Icon End */}
          {/** Address Start */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-gray-950 font-prompt font-medium text-[18px] ">
              บริษัท โฮมเซอร์วิสเซส จำกัด
            </p>
            <p className="text-gray-800 font-prompt text-[14px]">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </p>
          </div>
          {/** Address End */}
          {/** Contact Start */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[12px]">
              <img src="/icons/tel-icon.png" alt="" />
              <p className="font-prompt text-[16px] text-gray-800">
                080-540-6357
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src="/icons/message-icon.png" alt="" />
              <p className="font-prompt text-[16px] text-gray-800">
                contact@homeservices.co
              </p>
            </div>
          </div>
          {/** Contact End */}
        </div>
      </div>
      <div className="w-screen h-[116px] lg:h-[42px] flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-[375px] h-full lg:max-w-[1142px] px-[16px] py-[16px] flex flex-col justify-between lg:flex-row">
          {/** XS Show Detail Start */}
          <div className="gap-[8px] flex flex-col lg:hidden">
            <p className="text-[14px] font-prompt text-gray-700">
              เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
            </p>
            <p className="text-[14px] font-prompt text-gray-700">
              นโยบายความเป็นส่วนตัว
            </p>
          </div>
          <p className="text-[12px] font-prompt text-gray-500 lg:hidden">
            copyright © 2021 HomeServices.com All rights reserved
          </p>
          {/** XS Show Detail End */}
          {/**LG Show Detail Start */}
          <p className="text-[12px] font-prompt text-gray-500 hidden lg:flex items-center justfiy-center">
            copyright © 2021 HomeServices.com All rights reserved
          </p>
          <div className="items-center gap-[24px] hidden lg:flex">
            <p className="text-[12px] font-prompt text-gray-500">
              เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
            </p>
            <p className="text-[12px] font-prompt text-gray-500">
              นโยบายความเป็นส่วนตัว
            </p>
          </div>
          {/** LG Show Detail End */}
        </div>
      </div>
    </div>
  );
}

export default UserFooter;
