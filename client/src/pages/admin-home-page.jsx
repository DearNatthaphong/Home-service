import React from "react";
import { useAuth } from "../context/authentication";
import logoutIcon from "/icons/logout-icon.png";
import axios from "axios";

function AdminHomePage() {
  const { adminLogout } = useAuth();
  return (
    <div className="w-screen h-screen bg-background">
      <section className="w-[240px] h-screen bg-blue-950 flex flex-col">
        <header className="w-full h-[106px] bg-green-300"></header>
        <section className="h-full flex flex-col justify-between">
          <div className="w-full h-[170px] bg-red"></div>
          <button
            className="w-full h-[54px] mb-[50px] flex items-center justify-center"
            onClick={() => adminLogout()}
          >
            <img src={logoutIcon} alt="" />
            <p className="text-[16px] font-prompt text-white ml-[16px]">
              ออกจากระบบ
            </p>
          </button>
        </section>
      </section>
    </div>
  );
}

export default AdminHomePage;
