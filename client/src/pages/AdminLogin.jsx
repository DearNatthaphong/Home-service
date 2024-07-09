import React from "react";
import AdminLoginForm from "../components/AdminLoginForm";
import houseIcon from "../../public/icons/houseIcon.png";

function AdminLogin() {
  return (
    <div className="w-screen h-screen bg-background flex items-center justify-center flex-col gap-[45px]">
      <div className="flex">
        <img src={houseIcon} alt="" />
        <p className="font-prompt text-blue-600 text-[52px] font-medium">
          HomeServices
        </p>
      </div>
      <AdminLoginForm />
    </div>
  );
}

export default AdminLogin;
