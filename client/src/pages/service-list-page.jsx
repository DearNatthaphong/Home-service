import ServiceHeader from "../components/service-list-page/service-header";
import ServiceTitle from "../components/service-list-page/service-title";
import ServiceFilter from "../components/service-list-page/service-filter";
import ServiceCard from "../components/service-list-page/service-card";
import ServiceContentFooter from "../components/service-list-page/service-content-footer";
import ServiceFooter from "../components/service-list-page/service-footer";

function ServiceListPage() {
  return (
    <div className="w-full h-full bg-background overflow-x-hidden overflow-y-hidden">
      <ServiceHeader />
      <ServiceTitle />
      <ServiceFilter />
      <ServiceCard />
      <ServiceContentFooter />
      <ServiceFooter />
    </div>
  );
}

export default ServiceListPage;
