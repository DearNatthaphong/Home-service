import React from "react";
import AdminPromotionSideBar from "../components/admin-sidebar/admin-promotion-sidebar";
import AdminAddPromotionHeader from "../components/admin-promotion-page/admin-add-promotion-header";
import AdminAddPromotionMain from "../components/admin-promotion-page/admin-add-promotion-main";
import { AddPromotionProvider } from "../context/add-promotion-context";

function AdminAddPromotionPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminPromotionSideBar />
      <div className="flex flex-col w-full h-full">
        <AddPromotionProvider>
          <AdminAddPromotionHeader />
          <AdminAddPromotionMain />
        </AddPromotionProvider>
      </div>
    </div>
  );
}

export default AdminAddPromotionPage;
