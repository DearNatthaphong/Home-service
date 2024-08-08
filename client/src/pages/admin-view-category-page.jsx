import React from "react";
import AdminCategorySideBar from "../components/admin-sidebar/admin-category-sidebar";
import AdminViewCategoryHeader from "../components/admin-category-page/admin-view-category-header";
import AdminViewCategoryMain from "../components/admin-category-page/admin-view-category-main";

function AdminViewCategoryPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminCategorySideBar />
      <div className="flex flex-col w-full h-full">
        <AdminViewCategoryHeader />
        <AdminViewCategoryMain />
      </div>
    </div>
  );
}

export default AdminViewCategoryPage;
