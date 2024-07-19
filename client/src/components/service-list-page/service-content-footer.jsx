import React from "react";

function ServiceContentFooter() {
  return (
    <div className="w-screen h-[458px] md:h-[320px] lg:h-[284px] mt-[55px] bg-blue-600 px-[24px] py-[48px] items-center flex flex-col lg:flex-row lg:justify-center relative">
      <div className="w-full max-w-[810px] h-[120px] ">
        <p className="text-[18px] font-prompt font-medium text-white lg:text-[20px] text-center">
          เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร{" "}
          <br className="md:hidden" />
          โดยทีมช่างมืออาชีพมากกว่า 100 ทีม
          สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง
          <br className="" />
          ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม.{" "}
          <br />
          มั่นใจ ช่างไม่ทิ้งงาน <br className="md:hidden" />{" "}
          พร้อมรับประกันคุณภาพงาน
        </p>
      </div>
      <img
        src="/images/service-list-house-image.png"
        alt=""
        className="absolute bottom-0 w-[250px] h-[200px] contrast-50 brightness-300 lg:right-[-110px] lg:w-[420px] lg:h-full"
      />
    </div>
  );
}

export default ServiceContentFooter;
