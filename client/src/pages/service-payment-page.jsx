import ServiceHeader from '../components/service-list-page/service-header.jsx';
import CardHeader from '../components/payment/card-header.jsx';
import CardProcess from '../components/payment/card-process.jsx';
import PaymentFooter from '../components/payment/payment-footer.jsx';
import CardBody from '../components/payment/card-body.jsx';
import CardSummary from '../components/payment/card-summary.jsx';

function ServicePayment() {
  return (
    <>
      <ServiceHeader />
      <section className="relative font-prompt text-[14px] bg-background w-screen flex flex-col justify-center items-centers">
        <div className="absolute top-0 left-0 w-full h-[168px] xl:h-[240px] bg-cover bg-center bg-[url('images/bg-payment-mobile.png')] xl:bg-[url('images/bg-payment-desktop.png')]"></div>
        <div className="px-3 pt-12 pb-6 xl:pt-20 xl:px-[10%] xl:pb-12 flex flex-col gap-5 xl:gap-12">
          <CardHeader />
          <CardProcess />
        </div>
        <div className="flex flex-col xl:px-[10%] xl:flex-row gap-5 xl:pb-20">
          <CardBody />
          <CardSummary />
        </div>
      </section>
      <PaymentFooter />
    </>
  );
}

export default ServicePayment;
