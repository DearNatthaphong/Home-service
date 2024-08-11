import ServiceHeader from '../components/service-list-page/service-header.jsx';
import CardHeader from '../components/service-detail-page/card-header.jsx';
import CardProcess from '../components/service-detail-page/card-process.jsx';
import CardBody from '../components/service-detail-page/card-body.jsx';
import CardSummary from '../components/service-detail-page/card-summary.jsx';
import ServiceFooter from '../components/service-detail-page/service-footer.jsx';

function ServiceDetailPage() {
  return (
    <section className="w-screen min-h-screen font-prompt text-sm bg-background">
      <ServiceHeader />
      <div className="relative bottom-[160px] xl:bottom-auto xl:static flex flex-col items-center">
        <div
          className="absolute top-[53px] left-0 mt-[160px] xl:mt-0 w-full h-[168px] bg-cover bg-center"
          style={{
            backgroundImage: `url('../../public/images/bg-payment-desktop.png')`
          }}
        ></div>
        <div className="w-full min-h-full max-w-[1120px] px-3 xl:px-0 flex flex-col gap-3 overflow-hidden">
          <CardHeader />
          <CardProcess />
          <div className="w-full flex flex-col md:flex-row gap-5 md:pb-20">
            <CardBody />
            <CardSummary />
          </div>
        </div>
      </div>
      <ServiceFooter />
    </section>
  );
}

export default ServiceDetailPage;
