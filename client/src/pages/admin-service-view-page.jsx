import AdminServiceHeaderView from "../components/admin-service-page/admin-service-header-view";
import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceMainView from "../components/admin-service-page/admin-service-main-view";

function AdminServiceViewPage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip font-prompt">
      <AdminServiceSideBar />
      <div className="w-full h-full flex flex-col">
        <AdminServiceHeaderView />
        <AdminServiceMainView />
      </div>
    </div>
  );
}

export default AdminServiceViewPage;
