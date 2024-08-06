import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminEditPromotionHeader from "../components/admin-promotion-page/admin-edit-promotion-header";
import AdminEditPromotionMain from "../components/admin-promotion-page/admin-edit-promotion-main";

function AdminEditPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <PromotionProvider>
          <AdminEditPromotionHeader />
          <AdminEditPromotionMain />
        </PromotionProvider>
      </div>
    </div>
  );
}

export default AdminEditPromotionPage;
