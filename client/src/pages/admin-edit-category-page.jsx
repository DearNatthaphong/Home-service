import React from "react";
import AdminCategorySideBar from "../components/admin-sidebar/admin-category-sidebar";
import AdminEditCategoryHeader from "../components/admin-category-page/admin-edit-category-header";
import AdminEditCategoryMain from "../components/admin-category-page/admin-edit-category-main";
import CategoryDeleteModal from "../components/admin-category-page/category-delete-modal";

function AdminEditCategoryPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminCategorySideBar />
      <div className="flex flex-col w-full h-full">
        <AdminEditCategoryHeader />
        <AdminEditCategoryMain />
      </div>
      <CategoryDeleteModal />
    </div>
  );
}

export default AdminEditCategoryPage;
