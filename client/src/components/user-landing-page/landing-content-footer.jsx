import React from "react";

function LandingContentFooter() {
  return (
    <div className="w-full h-[731px] md:h-[378px] bg-blue-600 flex items-center justify-center">
      <div className="w-full max-w-[1263px] h-[731px] md:h-[378px] bg-blue-600 flex flex-col items-center md:flex-row relative">
        <img
          src="/images/user-footer-mini.png"
          alt=""
          className="lg:hidden w-full max-w-[375px] h-full max-h-[280px]"
        />
        <img
          src="/images/user-footer-big.png"
          alt=""
          className="hidden lg:flex w-full max-w-[500px] h-full"
        />
        <div className="px-[24px] pt-[32px] lg:px-[0px] lg:pt-[0px] md:ml-[50px]">
          <p className="font-prompt font-medium text-[32px] lg:text-[40px] text-white">
            มาร่วมเป็นพนักงานซ่อม
            <br className="hidden lg:flex" />
            กับ HomeServices
          </p>
          <p className="font-prompt font-medium text-[16px] lg:text-[20px] text-white mt-[24px]">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
            <br />
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </p>
          <p className="font-prompt font-medium text-[20px] lg:text-[32px] text-white mt-[24px]">
            ติดต่อมาที่อีเมล:
            <br className="lg:hidden" /> job@homeservices.co
          </p>
        </div>
        <img
          src="/images/user-house-mini.png"
          alt=""
          className="right-0 bottom-0 absolute brightness-125 lg:hidden"
        />
        <img
          src="/images/user-house-big.png"
          alt=""
          className="right-0 bottom-0 absolute brightness-125 hidden lg:flex"
        />
      </div>
    </div>
  );
}

export default LandingContentFooter;
