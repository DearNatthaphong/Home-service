import Header from "../components/header";
import Footer from "../components/homepage/footer";
import Historylist from "../components/customer-service-list-page/history-order-list";

function UserHistoryListPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Historylist />
      <Footer />
    </div>
  );
}

export default UserHistoryListPage;
