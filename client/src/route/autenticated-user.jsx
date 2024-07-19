import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/user-home-page';
import ServicePayment from '../pages/service-payment-page';
import TestPayment from '../pages/test-payment-page';
import PaymentSuccess from '../pages/payment-success-page';
import ServiceListPage from '../pages/service-list-page';

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/servicelist" element={<ServiceListPage />} />
        {/* เทรน */}
        {/* <Route path="/services" element={<ServiceList />} /> */}
        {/* ม่อน */}
        {/* <Route path="/carts" element={<ServiceCarts />} /> */}
        {/* ม่อน */}
        {/* <Route path="/order" element={<ServiceOrder />} /> */}
        {/* ป้อง */}
        {/* <Route path="/orders" element={<ServiceOrderList />} /> */}
        {/* เดียร์ */}
        <Route path="/payment" element={<ServicePayment />} />
        {/* <Route path="/payment" element={<TestPayment />} /> */}
        <Route path="/payment/success" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}

export default AutenticatedUser;
