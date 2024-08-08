import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminPromotionHeader from "../components/admin-promotion-page/admin-promotion-header";
import AdminPromotionMain from "../components/admin-promotion-page/admin-promotion-main";
import { PromotionProvider, usePromotion } from "../context/promotion-context";
import DeleteModal from "../components/admin-promotion-page/delete-modal";

function AdminPromotionPage() {
  return (
    <PromotionProvider>
      <div className="w-screen h-screen bg-background flex overflow-clip">
        <AdminPromotionSideBar />
        <div className="flex flex-col w-full h-full">
          <AdminPromotionHeader />
          <AdminPromotionMain />
        </div>
        <DeleteModal />
      </div>
    </PromotionProvider>
  );
}

export default AdminPromotionPage;
