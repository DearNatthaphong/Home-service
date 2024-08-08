import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminEditPromotionHeader from "../components/admin-promotion-page/admin-edit-promotion-header";
import AdminEditPromotionMain from "../components/admin-promotion-page/admin-edit-promotion-main";
import { PromotionProvider } from "../context/promotion-context";
import DeleteModal from "../components/admin-promotion-page/delete-modal";

function AdminEditPromotionPage() {
  return (
    <PromotionProvider>
      <div className="w-screen h-screen bg-background flex overflow-clip">
        <AdminPromotionSideBar />
        <div className="flex flex-col w-full h-full">
          <AdminEditPromotionHeader />
          <AdminEditPromotionMain />
        </div>
        <DeleteModal />
      </div>
    </PromotionProvider>
  );
}

export default AdminEditPromotionPage;
