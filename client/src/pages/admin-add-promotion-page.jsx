import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminAddPromotionHeader from "../components/admin-promotion-page/admin-add-promotion-header";
import AdminAddPromotionMain from "../components/admin-promotion-page/admin-add-promotion-main";
import { PromotionProvider } from "../context/promotion-context";

function AdminAddPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <PromotionProvider>
          <AdminAddPromotionHeader />
          <AdminAddPromotionMain />
        </PromotionProvider>
      </div>
    </div>
  );
}

export default AdminAddPromotionPage;
