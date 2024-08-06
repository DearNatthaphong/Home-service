import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/user-home-page';
import ServicePayment from '../pages/service-payment-page';
import PaymentSuccess from '../pages/payment-success-page';
import ServiceListPage from '../pages/service-list-page';
import ServiceDetailPage from '../pages/service-detail-page";
import ServiceInformation from "../pages/service-detail-information-page';
import ServiceInformation from '../components/service-detail-page/service-detail-information';
import UserHistoryListPage from '../pages/customer-history-list-page';
import UserOrderListPage from '../pages/customer-order-list-page';

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        {/* เทรน */}
        <Route path="/servicelist" element={<ServiceListPage />} />
        {/* ม่อน */}
        <Route path="/servicedetail/:id" element={<ServiceDetailPage />} />
        <Route path="/service/information/orders/:id/appointments" element={<ServiceInformation />} />
        {/* ม่อน */}
        <Route
          path="/service/information/orders/:id/appointments"
          element={<ServiceInformation />}
        />
        {/* เดียร์ */}
        <Route path="/payment/:id" element={<ServicePayment />} />
        <Route path="/payment/:id/success" element={<PaymentSuccess />} />
        {/* ป้อง */}
        <Route path="/orderlist" element={<UserOrderListPage />} />
        <Route path="/historylist" element={<UserHistoryListPage />} />

      </Routes>
    </div>
  );
}

export default AutenticatedUser;
