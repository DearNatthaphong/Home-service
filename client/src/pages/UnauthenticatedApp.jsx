import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./login-page";

function UnauthenticatedApp() {
    return (
        <div>
            <Routes>
                <Route path="/auth/login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default UnauthenticatedApp;