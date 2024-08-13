import React from 'react';
import UserHeader from '../components/user-header';
import UserServiceHeader from '../components/user-service-detail-page/user-service-header';
import UserServiceStateBanner from '../components/user-service-detail-page/user-service-state-banner';
import UserServiceFillInformation from '../components/user-service-detail-page/user-service-fill-information';
import UserServiceSummary from '../components/user-service-detail-page/user-service-summary';
import UserServiceDetailFooter from '../components/user-service-detail-page/user-service-detail-footer';
import { ServiceDetailProvider } from '../context/user-service-detail-context';
import PaymentFooter from '../components/payment/payment-footer';
import { PaymentProvider } from '../context/payment-context';

function UserServiceDetailPage() {
  return (
    <ServiceDetailProvider>
      <section className="w-full min-h-screen font-prompt text-sm bg-background">
        <UserHeader />
        <div className="relative bottom-[160px] xl:bottom-auto xl:static flex flex-col items-center">
          <div
            className="absolute top-[53px] left-0 mt-[160px] xl:mt-0 w-full h-[168px] bg-cover bg-center"
            style={{
              backgroundImage: `url('../../public/images/bg-payment-mobile.png')`
            }}
          ></div>
          <div className="w-full min-h-full max-w-[1120px] px-3 xl:px-0 flex flex-col gap-3 overflow-hidden">
            {/* <CardHeader />
          <CardProcess /> */}
            <UserServiceHeader />
            <UserServiceStateBanner />
            <div className="w-full flex flex-col xl:flex-row gap-5 xl:pb-20">
              <UserServiceFillInformation />
              <UserServiceSummary />
            </div>
          </div>
        </div>
        {/* <PaymentFooter /> */}
        {/* <PaymentProvider> */}
        <UserServiceDetailFooter />
        {/* </PaymentProvider> */}
      </section>
    </ServiceDetailProvider>
  );
}

export default UserServiceDetailPage;
