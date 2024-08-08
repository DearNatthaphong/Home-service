import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminViewPromotionHeader from "../components/admin-promotion-page/admin-view-promotion-header";
import AdminViewPromotionMain from "../components/admin-promotion-page/admin-view-promotion-main";
import { PromotionProvider } from "../context/promotion-context";

function AdminViewPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <PromotionProvider>
          <AdminViewPromotionHeader />
          <AdminViewPromotionMain />
        </PromotionProvider>
      </div>
    </div>
  );
}

export default AdminViewPromotionPage;
