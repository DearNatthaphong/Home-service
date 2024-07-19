import React from "react";
import SellIcon from "/icons/sell-icon.png";

function ServiceCard() {
  const posts = [
    {
      title: "ล้างแอร์",
      content: "ค่าบริการประมาณ 500.00 - 1,000.00 ฿",
      notion: "บริการทั่วไป",
    },
    {
      title: "ติดตั้งแอร์",
      content: "ค่าบริการประมาณ 2800.00 ฿",
      notion: "บริการทั่วไป",
    },
    {
      title: "ทำความสะอาดทั่วไป",
      content: "ค่าบริการประมาณ 500.00 ฿",
      notion: "บริการทั่วไป",
    },
    {
      title: "ซ่อมเครื่องซักผ้า",
      content: "ค่าบริการประมาณ 500.00 ฿",
      notion: "บริการทั่วไป",
    },
    {
      title: "ติดตั้งเตาแก๊ส",
      content: "ค่าบริการประมาณ 1,000.00 ฿",
      notion: "บริการห้องครัว",
    },
    {
      title: "ติดตั้งเครื่องดูดควัน",
      content: "ค่าบริการประมาณ 1,000.00 ฿",
      notion: "บริการห้องครัว",
    },
    {
      title: "ติดตั้งชักโครก",
      content: "ค่าบริการประมาณ 1,000.00 ฿",
      notion: "บริการห้องน้ำ",
    },
    {
      title: "ติดตั้งเครื่องทำน้ำอุ่น",
      content: "ค่าบริการประมาณ 500.00 ฿",
      notion: "บริการห้องน้ำ",
    },
  ];
  return (
    <div className="w-screen h-full flex items-center justify-center pt-[25px]">
      <div className="w-full max-w-[1125px] flex-wrap gap-x-[37px] gap-y-[24px] lg:gap-y-[48px] flex items-center justify-center">
        {posts.map((items) => (
          <div className="w-[350px] h-[350px] lg:h-[365px] bg-white rounded-[8px] border-[1px] border-gray-300">
            <img
              src=""
              alt=""
              className="w-full h-[200px] bg-green-300 rounded-t-[8px]"
            />
            <div className="w-full h-[150px] lg:h-[165px] flex flex-col p-[15px]">
              <div className="w-full h-full justify-between flex-col flex">
                <div className="w-full h-[82px] lg:h-[89px] flex flex-col justify-between">
                  <div className="w-[79px] h-[26px] rounded-[8px] bg-blue-100 flex items-center justify-center">
                    <p className="text-[12px] font-prompt text-blue-800 ">
                      {items.notion}
                    </p>
                  </div>
                  <div className="w-full h-[52px] flex flex-col justify-between">
                    <p className="font-prompt font-medium text-[18px] text-gray-950">
                      {items.title}
                    </p>
                    <div className="flex items-center gap-[8px]">
                      <img src={SellIcon} alt="" />
                      <p className="font-prompt text-[14px] text-gray-700">
                        {items.content}
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-[80px] h-[28px] flex items-center justify-center">
                  <p className="font-prompt font-semibold text-[16px] text-blue-600 underline underline-offset-1">
                    เลือกบริการ
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
