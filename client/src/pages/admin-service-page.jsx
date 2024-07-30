import React from "react";
import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceHeader from "../components/admin-service-page/admin-service-header";
import AdminServiceMain from "../components/admin-service-page/admin-service-main";

function AdminServicePage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip">
      <AdminServiceSideBar />
      <div className="w-full h-full flex flex-col">
        <AdminServiceHeader />
        <AdminServiceMain />
      </div>
    </div>
  );
}

export default AdminServicePage;
