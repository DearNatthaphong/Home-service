import React from 'react';
import AdminCategorySideBar from '../components/admin-sidebar/admin-category-sidebar';
import AdminCategoryHeader from '../components/admin-category-page/admin-category-header';
import AdminCategoryMain from '../components/admin-category-page/admin-category-main';
import { CategoryProvider } from '../context/category-context';
import CategoryDeleteModal from '../components/admin-category-page/category-delete-modal';

function AdminCategoryPage() {
  return (
    <CategoryProvider>
      <div className="w-screen h-screen bg-background flex">
        <AdminCategorySideBar />
        <div className="flex flex-col w-full h-full">
          <AdminCategoryHeader />
          <AdminCategoryMain />
        </div>
        <CategoryDeleteModal />
      </div>
    </CategoryProvider>
  );
}

export default AdminCategoryPage;
