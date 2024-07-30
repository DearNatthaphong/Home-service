import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCategoryPage from "../pages/admin-category-page";
import AdminServicePage from "../pages/admin-service-page";
import AdminPromotionPage from "../pages/admin-promotion-page";

function AutenticatedAdmin() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/category" element={<AdminCategoryPage />} />
        <Route path="/admin/service" element={<AdminServicePage />} />
        <Route path="/admin/promotion" element={<AdminPromotionPage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedAdmin;
