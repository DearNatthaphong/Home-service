import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authentication";

function AdminCategorySideBar() {
  const navigate = useNavigate();
  const { adminLogout } = useAuth();
  return (
    <div className="w-full max-w-[240px] h-screen bg-blue-950 relative flex flex-col">
      <header className="w-full h-full max-h-[106px] p-[24px]">
        <div className="w-full h-full bg-blue-100 rounded-[12px] px-[12px] py-[8px] flex items-center justify-between">
          <img
            src="/images/house-icon.png"
            alt=""
            className="w-[26px] h-[26px]"
          />
          <span className="font-prompt font-medium text-blue-600 text-[19px]">
            HomeServices
          </span>
        </div>
      </header>
      <main className="w-full max-w-[240px] my-[16px]">
        <button
          className="w-full h-full max-h-[54px] mb-[4px] text-white flex px-[24px] py-[15px] items-center gap-[16px] bg-blue-900"
          onClick={() => {
            navigate("/admin/category");
          }}
        >
          <img
            src="/icons/type-icon.svg"
            alt=""
            className="text-white w-[24px] h-[24px]"
          />
          <p className="font-prompt font-medium text-[16px]">หมวดหมู่</p>
        </button>
        <button
          className="w-full h-full max-h-[54px] mb-[4px] text-white flex px-[24px] py-[15px] items-center gap-[16px]"
          onClick={() => {
            navigate("/admin/service");
          }}
        >
          <img
            src="/icons/sheet-icon.svg"
            alt=""
            className="text-white w-[24px] h-[24px]"
          />
          <p className="font-prompt font-medium text-[16px]">บริการ</p>
        </button>
        <button
          className="w-full h-full max-h-[54px] mb-[4px] text-white flex px-[24px] py-[15px] items-center gap-[16px]"
          onClick={() => {
            navigate("/admin/promotion");
          }}
        >
          <img
            src="/icons/promo-icon.svg"
            alt=""
            className="text-white w-[24px] h-[24px]"
          />
          <p className="font-prompt font-medium text-[16px] text-white">
            Promotion Code
          </p>
        </button>
      </main>
      <button
        className="absolute bottom-[72px] h-[54px] w-full px-[24px] py-[15px] flex items-center gap-[16px]"
        onClick={() => adminLogout()}
      >
        <img
          src="/icons/out-icon.svg"
          alt=""
          className="text-white w-[24px] h-[24px]"
        />
        <p className="font-prompt font-medium text-[16px] text-white">
          ออกจากระบบ
        </p>
      </button>
    </div>
  );
}

export default AdminCategorySideBar;
