import Header from '../components/header';
import Footer from '../components/homepage/footer';
import Historylist from '../components/customer-service-list-page/history-order-list';
import UserHeader from '../components/user-header';

function UserHistoryListPage() {
  return (
    <div className="overflow-clip ">
      <UserHeader />
      <Historylist />
      <Footer />
    </div>
  );
}

export default UserHistoryListPage;
