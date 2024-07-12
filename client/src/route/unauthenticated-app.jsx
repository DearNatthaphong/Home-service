import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/admin-login-page";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
