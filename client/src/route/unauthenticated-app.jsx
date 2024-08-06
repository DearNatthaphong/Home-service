import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/admin-login-page";
import Homepage from "../pages/landing-page";
import ServiceListPage from "../pages/service-list-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";

import ServiceDetailPage from "../pages/service-detail-page";


function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/servicelist" element={<ServiceListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
