import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/user-home-page";

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedUser;
