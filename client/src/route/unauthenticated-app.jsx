import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/admin-login-page";
import Homepage from "../pages/landing-page";
import Servicelist from "../pages/service-list-page";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/servicelist" element={<Servicelist />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
