import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminPromotionHeader from "../components/admin-promotion-page/admin-promotion-header";
import AdminPromotionMain from "../components/admin-promotion-page/admin-promotion-main";

function AdminPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <AdminPromotionHeader />
        <AdminPromotionMain />
      </div>
    </div>
  );
}

export default AdminPromotionPage;
