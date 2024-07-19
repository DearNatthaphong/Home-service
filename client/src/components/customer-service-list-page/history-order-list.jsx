import {
  userIcon,
  clockIcon,
  listPadIcon,
} from "../../../public/icons/icon-user-2";
import photo1 from "/public/images/calender-icon.png";
import photo2 from "/public/images/worker-icon.png";
import { useNavigate } from "react-router-dom";
function Historylist() {
  const navigate = useNavigate();
  const goToOrderList = () => {
    navigate("/orderlist");
  };
  return (
    <section className="font-prompt flex justify-center bg-gray-100 lg:relative">
      <div className=" flex flex-col  justify-center items-center gap-6 mb-8 lg:flex-row lg:mt-[120px] lg:items-start">
        <div className="w-screen flex justify-center shadow-lg py-2 lg:w-[253px] lg:h-[252px] lg:shadow-none lg:py-0">
          <div className="w-[343px] border border-gray-300 bg-white rounded-lg lg:flex lg:flex-col lg:gap-3 ">
            <div
              className="py-2 text-gray-500 text-lg font-medium leading-[27px] px-3 lg:px-5 mt-3
           lg:text-xl lg:font-normal  lg:leading-[30px]"
            >
              บัญชีผู้ใช้
            </div>
            <hr />
            <div className="flex py-3 justify-between px-3 gap-2 lg:flex-col lg:gap-7 lg:px-5 ">
              <div className="group cursor-pointer flex items-center gap-1 lg:gap-3">
                <div className="group-hover:text-blue-700 transition-colors duration-200 text-gray-500">
                  {userIcon}
                </div>

                <span
                  className=" group-hover:text-blue-700 transition-colors duration-200  text-zinc-800 text-sm font-normal leading-[21px]
               lg:text-base lg:leading-normal"
                >
                  ข้อมูลผู้ใช้งาน
                </span>
              </div>
              <div className="group cursor-pointer flex items-center gap-1 lg:gap-3">
                <div className="group-hover:text-blue-700 transition-colors duration-200 text-gray-500">
                  {listPadIcon}
                </div>
                <span
                  className="group-hover:text-blue-700 transition-colors duration-200 text-zinc-800 text-sm font-normal leading-[21px] lg:text-base lg:leading-normal"
                  onClick={goToOrderList}
                >
                  รายการคำสั่งซ่อม
                </span>
              </div>
              <div className="group cursor-pointer flex items-center gap-1 lg:gap-3">
                <div className="group-hover:text-blue-700 transition-colors duration-200 text-gray-500 ">
                  {clockIcon}
                </div>
                <span className="group-hover:text-blue-700 transition-colors duration-200 text-zinc-800 text-sm font-normal leading-[21px] lg:text-base lg:leading-normal">
                  ประวัติการซ่อม
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:top-0 lg:w-full">
          <div className="w-[343px] h-[46px] px-4 py-2 bg-blue-600 rounded-lg lg:w-full lg:h-[96px] lg:flex lg:justify-center lg:items-center">
            <div className="w-[311px] text-center text-white text-xl font-medium  leading-[30px] lg:text-[32px] lg:leading-[48px]">
              ประวัติการซ่อม
            </div>
          </div>
        </div>
        <div className="w-[343px] p-4 bg-white rounded-lg border border-gray-300 flex-col justify-center items-start gap-6 flex lg:w-[831px] lg:py-5">
          <div className="flex flex-col gap-4 lg:w-full lg:relative">
            <div className="flex flex-col gap-1 lg:flex-row lg:justify-between">
              <div className="text-black text-lg font-medium leading-[27px]  lg:text-xl  lg:leading-[30px]">
                คำสั่งการซ่อมรหัส : AD04071205
              </div>
              <div className="flex items-center gap-3">
                <div className=" text-gray-500 text-sm font-normal leading-[21px]">
                  สถานะ:
                </div>
                <div className="w-[118px] h-[25px] px-3 py-0.5 bg-green-100 rounded-[99px] justify-start items-start gap-2.5 flex">
                  <div className=" text-sky-900 text-sm font-normal leading-[21px]">
                    ดำเนินการสำเร็จ
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <img src={photo1} className="w-[20px] h-[20px]" />
                  <div className="w-[283px] text-gray-500 text-sm font-normal  leading-[21px]">
                    วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={photo2} className="w-[20px] h-[20px]" />
                  <div className="w-[283px] text-gray-500 text-sm font-normal leading-[21px]">
                    พนักงาน: สมาน เยี่ยมยอด
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:absolute lg:right-0">
                <div className="text-gray-500 text-sm font-normal leading-[21px]">
                  ราคารวม:
                </div>
                <div className=" text-zinc-800 text-base font-medium  leading-normal">
                  1,550.00 ฿
                </div>
              </div>
              <div className="flex gap-6 lg:flex-col lg:gap-1">
                <div className="text-gray-500 text-sm font-normal leading-[21px]">
                  รายการ:
                </div>
                <li className="w-[220px] text-black text-sm font-normal leading-[21px] lg:w-full ">
                  ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Historylist;