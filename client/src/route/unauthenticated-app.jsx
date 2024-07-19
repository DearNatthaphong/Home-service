import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLoginPage from '../pages/admin-login-page';
import Homepage from '../pages/landing-page';
import Servicelist from '../pages/service-list-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import ServiceDetailPage from '../pages/service-detail-page';
import ServiceImformationPage from '../pages/service-detail-information-page';

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/servicelist" element={<ServiceListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/servicedetail" element={<ServiceDetailPage />} />
        <Route path="/service/imformation" element={<ServiceImformationPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
