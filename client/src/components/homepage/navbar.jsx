import React from "react";
import houseLogo from "../../../public/images/houseLogo.svg";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <nav className="bg-white shadow-md w-full font-prompt">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={houseLogo}
            alt="HomeServices Logo"
            className="h-8 sm:h-10"
          />
          <div className="text-blue-500 text-lg sm:text-2xl font-bold">
            HomeServices
          </div>
          <div className="text-black text-sm sm:text-base pt-1">
            บริการของเรา
          </div>
        </div>
        <div className="flex items-center ml-2 sm:ml-4">
          <Link to="/auth/login"
            className="text-blue-500 border border-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default NavComponent;
