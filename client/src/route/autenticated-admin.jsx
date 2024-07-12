import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHomePage from "../pages/admin-home-page";

function AutenticatedAdmin() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/home" element={<AdminHomePage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedAdmin;
