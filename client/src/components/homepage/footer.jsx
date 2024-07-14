import logo from "../../../public/images/house-icon.png";
import logo1 from "../../../public/images/telephone-icon.png";
import logo2 from "../../../public/images/card-icon.png";
function Footer() {
  return (
    <footer className="font-prompt">
      <div className="w-full flex flex-col justify-end items-center lg:relative lg:h-[193px] lg:justify-end">
        <div className=" py-[30px] flex flex-col justify-center items-center gap-6 lg:flex-row lg:items-center lg:absolute lg:top-0 ">
          <div className="w-[327px] inline-flex items-center gap-[9.78px]">
            <img className="w-[39.11px] h-[39.11px]" src={logo} />
            <div className="text-blue-600 text-3xl font-medium">
              HomeServices
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex w-[327px] lg:w-[500px]">
            <div className="text-zinc-800 text-lg font-medium leading-[27px]">
              บริษัท โฮมเซอร์วิสเซส จำกัด
            </div>
            <div className="text-gray-600 text-sm font-normal leading-[21px]">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </div>
          </div>
          <div className="w-[327px] flex flex-col gap-2">
            <div className="flex gap-2">
              <img className="w-[20px] h-[20px]" src={logo1} />
              <div className="">080-540-6357</div>
            </div>
            <div className="flex gap-2">
              <img className="w-[20px] h-[20px]" src={logo2} />
              <div className="">contact@homeservices.co</div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-gray-100 flex justify-center py-[20px] ">
          <div className="flex flex-col gap-3 lg:flex lg:flex-row-reverse  lg:h-[42px] lg:justify-end lg:items-center lg:w-[1204px] lg:gap-[400px]">
            <div className="flex flex-col justify-center items-start gap-1 lg:flex-row lg:gap-5 ">
              <div className=" text-gray-500 text-sm font-normal leading-[21px]">
                เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
              </div>
              <div className="text-gray-500 text-sm font-normal leading-[21px]">
                นโยบายความเป็นส่วนตัว
              </div>
            </div>
            <div className="w-[327px] text-gray-400 text-xs font-normal leading-[18px] ">
              copyright © 2021 HomeServices.com All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
