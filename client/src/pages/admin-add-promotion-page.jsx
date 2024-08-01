import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminAddPromotionHeader from "../components/admin-promotion-page/admin-add-promotion-header";
import AdminAddPromotionMain from "../components/admin-promotion-page/admin-add-promotion-main";

function AdminAddPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <AdminAddPromotionHeader />
        <AdminAddPromotionMain />
      </div>
    </div>
  );
}

export default AdminAddPromotionPage;
