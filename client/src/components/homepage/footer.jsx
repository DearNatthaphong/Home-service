import logo from "../../../public/images/houseicon.png";
import logo1 from "../../../public/images/telephoneicon.png";
import logo2 from "../../../public/images/cardicon.png";
function Footer() {
  return (
    <div className="w-[375px] h-[389px] bg-white flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-[273px] px-4 py-6 flex-col justify-start items-start gap-6 flex">
        <div className="justify-start items-center gap-[9.78px] inline-flex">
          <img className="w-[39.11px] h-[39.11px]" src={logo} />
          <div className="text-blue-600 text-3xl font-medium font-['Prompt']">
            HomeServices
          </div>
        </div>
        <div className="self-stretch h-[77px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-zinc-800 text-lg font-medium font-['Prompt'] leading-[27px]">
            บริษัท โฮมเซอร์วิสเซส จำกัด
          </div>
          <div className="self-stretch text-gray-600 text-sm font-normal font-['Prompt'] leading-[21px]">
            452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
          </div>
        </div>
        <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <img className="w-[20px] h-[20px]" src={logo1} />
            <div className="grow shrink basis-0 text-gray-600 text-base font-normal font-['Prompt'] leading-normal">
              080-540-6357
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <img className="w-[20px] h-[20px]" src={logo2} />
            <div className="grow shrink basis-0 text-gray-600 text-base font-normal font-['Prompt'] leading-normal">
              contact@homeservices.co
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[116px] p-4 bg-gray-100 flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-[50px] flex-col justify-center items-start gap-2 flex">
          <div className="text-gray-500 text-sm font-normal font-['Prompt'] leading-[21px]">
            เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
          </div>
          <div className="text-gray-500 text-sm font-normal font-['Prompt'] leading-[21px]">
            นโยบายความเป็นส่วนตัว
          </div>
        </div>
        <div className="self-stretch text-gray-400 text-xs font-normal font-['Prompt'] leading-[18px]">
          copyright © 2021 HomeServices.com All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
