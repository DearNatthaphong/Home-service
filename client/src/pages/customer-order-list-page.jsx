import Header from '../components/header';
import Footer from '../components/homepage/footer';
import Orderlist from '../components/customer-service-list-page/order-list';
import UserHeader from '../components/user-header';

function UserOrderListPage() {
  return (
    <div className="overflow-clip">
      {/* <Header /> */}
      <UserHeader />
      <Orderlist />
      <Footer />
    </div>
  );
}

export default UserOrderListPage;
