import Header from "../components/header";
import Footer from "../components/homepage/footer";
import Orderlist from "../components/customer-service-list-page/order-list";

function UserOrderListPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Orderlist />
      <Footer />
    </div>
  );
}

export default UserOrderListPage;