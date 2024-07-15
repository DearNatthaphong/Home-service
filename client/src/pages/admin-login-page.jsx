import React from "react";
import AdminLoginForm from "../components/admin-login-page/admin-login-form";
import houseIcon from "/icons/house-icon.png";

function AdminLoginPage() {
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

export default AdminLoginPage;
