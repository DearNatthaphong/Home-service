import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/user-home-page";
import ServicePayment from "../pages/service-payment-page";
import TestPayment from "../pages/test-payment-page";
import PaymentSuccess from "../pages/payment-success-page";
import ServiceListPage from "../pages/service-list-page";
import DemoPage from "../pages/demo-page";

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        {/* เทรน */}
        <Route path="/servicelist" element={<ServiceListPage />} />
        {/* ม่อน */}
        {/* <Route path="/carts" element={<ServiceCarts />} /> */}
        {/* ม่อน */}
        {/* <Route path="/order" element={<ServiceOrder />} /> */}
        {/* ป้อง */}
        {/* <Route path="/orders" element={<ServiceOrderList />} /> */}
        {/* เดียร์ */}
        {/* <Route path="/payment" element={<ServicePayment />} /> */}
        {/* <Route path="/payment" element={<TestPayment />} /> */}
        {/* <Route path="/payment/success" element={<PaymentSuccess />} /> */}
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedUser;
