import ServiceDetail from "../components/service-detail-page/service-detail.jsx";
import ServiceHeader from '../components/service-list-page/service-header.jsx';


function ServiceDetailPage() {
  return (
    <div className="overflow-x-hidden">
      <ServiceHeader />
      <ServiceDetail />
      
    </div>
  );
}

export default ServiceDetailPage;
