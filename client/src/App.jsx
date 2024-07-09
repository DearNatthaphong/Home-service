import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
