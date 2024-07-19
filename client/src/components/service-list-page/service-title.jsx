import React from "react";

function SecviceTitle() {
  return (
    <div className="w-screen h-[168px] lg:h-[240px] flex items-center justify-center bg-[url('/images/service-list-banner-xs.png')] lg:bg-[url('/images/service-list-banner-lg.png')]">
      <div className="flex flex-col items-center gap-[16px] lg:gap-[17px]">
        <p className="font-prompt text-[20px] lg:text-[32px] text-white font-medium">
          บริการของเรา
        </p>
        <p className="font-prompt text-[14px] lg:text-[16px] text-white text-wrap text-center">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ
          <br className="lg:hidden" /> อีกมากมาย{" "}
          <br className="hidden lg:flex" /> โดยพนักงานแม่บ้าน และช่างมืออาชีพ
        </p>
      </div>
    </div>
  );
}

export default SecviceTitle;
