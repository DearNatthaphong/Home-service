import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/user-home-page';
import ServicePayment from '../pages/service-payment-page';
import PaymentSuccess from '../pages/payment-success-page';
import ServiceListPage from '../pages/service-list-page';
import ServiceDetailPage from '../pages/service-detail-page';
import ServiceInformation from '../pages/service-detail-information-page';
// import ServiceInformation from '../components/service-detail-page/service-detail-information';
import UserHistoryListPage from '../pages/customer-history-list-page';
import UserOrderListPage from '../pages/customer-order-list-page';
import { ServiceProvider } from '../context/service-context';
import UserServiceDetailPage from '../pages/user-service-detail-page';
import UserLandingPage from '../pages/user-landing-page';
import UserNotFoundPage from '../pages/user-not-found-page';
import { PaymentProvider } from '../context/payment-context';

function AutenticatedUser() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* <Route path="/home" element={<Homepage />} /> */}
        {/* เทรน */}
        <Route path="/servicelist" element={<ServiceListPage />} />
        {/* ม่อน */}
        <Route
          path="/services/:id"
          element={
            <ServiceProvider>
              <ServiceDetailPage />
            </ServiceProvider>
          }
        />
        <Route
          path="/services/orders/:id/appointments"
          element={
            // <PaymentProvider>
            <UserServiceDetailPage />
            // </PaymentProvider>
          }
        />
        {/* เดียร์ */}
        <Route
          path="/payment/:id"
          element={
            // <PaymentProvider>
            <ServicePayment />
            // </PaymentProvider>
          }
        />
        <Route
          path="/payment/:id/success"
          element={
            // <PaymentProvider>
            <PaymentSuccess />
            // </PaymentProvider>
          }
        />

        {/* ป้อง */}
        <Route path="/orderlist" element={<UserOrderListPage />} />
        <Route path="/historylist" element={<UserHistoryListPage />} />

        {/** Mock Up */}
        <Route path="/servicedetail" element={<UserServiceDetailPage />} />
        <Route path="/" element={<UserLandingPage />} />
        <Route path="/home" element={<UserLandingPage />} />
        <Route path="*" element={<UserNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AutenticatedUser;
