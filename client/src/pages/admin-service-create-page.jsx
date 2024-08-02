import React from "react";
import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceHeader2 from "../components/admin-service-page/admin-service-header-2";
import AdminServiceMain2 from "../components/admin-service-page/admin-service-main-2";

function AdminServiceCreatePage() {
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip font-prompt">
      <AdminServiceSideBar />
      <div className="w-full h-full flex flex-col">
        <AdminServiceHeader2 />
        <AdminServiceMain2 />
      </div>
    </div>
  );
}

export default AdminServiceCreatePage;
