import React from 'react';
import AdminCategorySideBar from '../components/admin-sidebar/admin-category-sidebar';
import AdminAddCategoryHeader from '../components/admin-category-page/admin-add-category-header';
import AdminAddCategoryMain from '../components/admin-category-page/admin-add-category-main';
import { CategoryProvider } from '../context/category-context';

function AdminAddCategoryPage() {
  return (
    <CategoryProvider>
      <div className="w-screen h-screen bg-background flex overflow-clip">
        <AdminCategorySideBar />
        <div className="flex flex-col w-full h-full">
          <AdminAddCategoryHeader />
          <AdminAddCategoryMain />
        </div>
      </div>
    </CategoryProvider>
  );
}

export default AdminAddCategoryPage;
