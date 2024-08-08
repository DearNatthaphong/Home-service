import React, { useRef } from "react";
import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceHeader2 from "../components/admin-service-page/admin-service-header-2";
import AdminServiceMain2 from "../components/admin-service-page/admin-service-main-2";

function AdminServiceCreatePage() {
  const mainFixRef = useRef();

  const handleSubmit = () => {
    if (mainFixRef.current) {
      mainFixRef.current.handleSubmit();
    }
  };
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip font-prompt">
      <AdminServiceSideBar />
      <div className="w-full h-full flex flex-col">
        <AdminServiceHeader2 onConfirm={handleSubmit} />
        <AdminServiceMain2 ref={mainFixRef} />
      </div>
    </div>
  );
}

export default AdminServiceCreatePage;
