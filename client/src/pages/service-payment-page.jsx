import ServiceHeader from '../components/service-list-page/service-header.jsx';
import CardHeader from '../components/payment/card-header.jsx';
import CardProcess from '../components/payment/card-process.jsx';
import CardBody from '../components/payment/card-body.jsx';
import CardSummary from '../components/payment/card-summary.jsx';
import PaymentFooter from '../components/payment/payment-footer.jsx';

function ServicePayment() {
  return (
    <section className="w-screen min-h-screen font-prompt text-sm bg-background">
      <ServiceHeader />
      <div className="relative bottom-[160px] xl:bottom-auto xl:static flex flex-col items-center">
        <div
          className="absolute top-[53px] left-0 mt-[160px] xl:mt-0 w-full h-[168px] bg-cover bg-center"
          style={{
            backgroundImage: `url('../../public/images/bg-payment-mobile.png')`
          }}
        ></div>
        <div className="w-full min-h-full max-w-[1120px] px-3 xl:px-0 flex flex-col gap-3 overflow-hidden">
          <CardHeader />
          <CardProcess />
          <div className="w-full flex flex-col xl:flex-row gap-5 xl:pb-20">
            <CardBody />
            <CardSummary />
          </div>
        </div>
      </div>
      <PaymentFooter />
    </section>
  );
}

export default ServicePayment;
{
}
