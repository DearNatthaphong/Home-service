import ServiceDetailImformation from "../components/service-detail-page/service-detail-information.jsx";
import Header from "../components/header.jsx";
import ServiceHeader from '../components/service-list-page/service-header.jsx';

function ServiceImformationPage() {
  return (
    <div className="overflow-x-hidden">
      <ServiceHeader />
      <ServiceDetailImformation />
    </div>
  );
}

export default ServiceImformationPage;
