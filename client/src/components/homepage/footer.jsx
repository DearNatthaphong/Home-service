import logo from "../../../public/images/houseicon.png";
import logo1 from "../../../public/images/telephoneicon.png";
import logo2 from "../../../public/images/cardicon.png";
function Footer() {
  return (
    <div className="xl:w-screen xl:flex xl:justify-center">
      <div className="w-[375px] h-[389px] bg-white flex-col justify-start items-start inline-flex lg:w-[1440px] lg:h-[193px] lg:relative lg:bg-white">
        <div className="self-stretch h-[273px] px-4 py-6 flex-col justify-start items-start gap-6 flex">
          <div className="justify-start items-center gap-[9.78px] inline-flex lg:left-[160px] lg:top-[46px] lg:absolute">
            <img className="w-[39.11px] h-[39.11px]" src={logo} />
            <div className="text-blue-600 text-3xl font-medium ">
              HomeServices
            </div>
          </div>
          <div className="self-stretch h-[77px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-zinc-800 text-lg font-medium  leading-[27px] lg:left-[495px] lg:top-[49px] lg:absolute lg:text-zinc-800 lg:text-lg lg:leading-[27px]">
              บริษัท โฮมเซอร์วิสเซส จำกัด
            </div>
            <div className="self-stretch text-gray-600 text-sm font-normal  leading-[21px] lg:left-[495px] lg:top-[83px] lg:absolute lg:text-gray-600 lg:text-sm lg:font-normal  lg:leading-[21px]">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex lg:left-[1047px] lg:top-[47px] lg:absolute lg:flex-col lg:justify-start lg:items-start lg:gap-2 lg:inline-flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <img className="w-[20px] h-[20px]" src={logo1} />
              <div className="grow shrink basis-0 text-gray-600 text-base font-normal  leading-normal">
                080-540-6357
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <img className="w-[20px] h-[20px]" src={logo2} />
              <div className="grow shrink basis-0 text-gray-600 text-base font-normal  leading-normal">
                contact@homeservices.co
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[116px] p-4 bg-gray-100 flex-col justify-start items-center gap-4 flex lg:w-[1440px] lg:h-[42px] lg:left-0 lg:top-[151px] lg:flex-row-reverse">
          <div className="self-stretch h-[50px] flex-col justify-center items-start gap-2 flex lg:left-[895px] lg:top-[13px] lg:flex-row lg:gap-6 lg:w-1/2">
            <div className="text-gray-500 text-sm font-normal  leading-[21px]">
              เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
            </div>
            <div className="text-gray-500 text-sm font-normal leading-[21px]">
              นโยบายความเป็นส่วนตัว
            </div>
          </div>
          <div className="self-stretch text-gray-400 text-xs font-normal  leading-[18px] lg:w-1/2 lg:text-center">
            copyright © 2021 HomeServices.com All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
