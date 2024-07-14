import React from "react";
import { Route, Routes } from "react-router-dom";
import TestLogin from "../components/login-page/Test.login";

function AutenticatedApp() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<TestLogin />} />
            </Routes>
        </div>
    )
}

export default AutenticatedApp;