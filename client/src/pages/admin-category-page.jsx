import React from "react";
import AdminCategorySideBar from "../components/admin-sidebar/admin-category-sidebar";
import AdminCategoryHeader from "../components/admin-category-page/admin-category-header";
import AdminCategoryMain from "../components/admin-category-page/admin-category-main";

function AdminCategoryPage() {
  return (
    <div className="w-screen h-screen bg-background flex">
      <AdminCategorySideBar />
      <div className="flex flex-col w-full h-full">
        <AdminCategoryHeader />
        <AdminCategoryMain />
      </div>
    </div>
  );
}

export default AdminCategoryPage;
