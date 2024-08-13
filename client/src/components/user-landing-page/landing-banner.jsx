import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingBanner() {
  const navigate = useNavigate();

  return (
    <div className="h-[705px] md:h-[540px] bg-blue-100 flex items-center justify-center px-[16px] pt-[56px] mt-[53px]">
      <div className="w-full max-w-[345px] md:max-w-[1095px] h-full relative">
        <p className="font-prompt font-semibold text-[40px] md:font-bold md:text-[64px] text-blue-700">
          เรื่องบ้าน...ให้เราช่วยดูแลคุณ
        </p>
        <p className="font-prompt font-medium text-[20px] text-black md:font-semibold md:text-[42px] mt-[16px] md:mt-[0px]">
          "สะดวก ราคาคุ้มค่า เชื่อถือได้"
        </p>
        <p className="font-prompt font-medium text-[18px] text-gray-700 mt-[32px] md:mt-[39px]">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ <br className="md:hidden" />
          ทำความสะอาดบ้าน <br />
          โดยพนักงานแม่บ้าน และช่างมืออาชีพ
        </p>
        <button
          onClick={() => navigate('/servicelist')}
          className="w-full max-w-[191px] h-full max-h-[54px] rounded-[8px] bg-blue-600 flex items-center justify-center mt-[32px] md:mt-[47px]"
        >
          <span className="font-prompt font-medium text-[20px] text-white">
            เช็คราคาบริการ
          </span>
        </button>
        <img
          src="/images/man-mini.png"
          alt=""
          className="absolute bottom-0 right-0 lg:hidden"
        />
        <img
          src="/images/man-big.png"
          alt=""
          className="absolute bottom-0 right-0 hidden lg:flex"
        />
      </div>
    </div>
  );
}

export default LandingBanner;
