import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/user-home-page";
import ServiceListPage from "../pages/service-list-page";

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/servicelist" element={<ServiceListPage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedUser;
