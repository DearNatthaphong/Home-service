import React from "react";
import houseLogo from "../../../public/images/houseLogo.svg";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <div className="w-[1440px] h-20 relative bg-white shadow">
      <div className="left-[428px] top-[20px] absolute justify-start items-start gap-8 inline-flex">
        <div className="p-2.5 justify-start items-center gap-1 flex">
          <button className=" text-black text-base font-medium font-['Prompt'] leading-normal">
            บริการของเรา
          </button>
        </div>
      </div>
      <Link to="/" className="text-center text-base font-medium text-blue-600 font-['Prompt'] btn btn-outline px-6 py-2 left-[1165px] top-[20px] absolute justify-start items-start gap-2.5 inline-flex">
        เข้าสู่ระบบ
      </Link>

      <div className="left-[161px] top-[22px] absolute justify-start items-center gap-2 inline-flex">
        <img className="w-8 h-8" src={houseLogo} />
        <div className="text-blue-600 text-2xl font-medium font-['Prompt']">
          HomeServices
        </div>
      </div>
    </div>
  );
}

export default NavComponent;
