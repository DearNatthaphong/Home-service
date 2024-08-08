import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceHeaderFix from "../components/admin-service-page/admin-service-header-fix";
import AdminServiceMainFix from "../components/admin-service-page/admin-service-main-fix";
import React, { useRef } from "react";

function AdminServiceFixPage() {
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
        <AdminServiceHeaderFix onConfirm={handleSubmit} />
        <AdminServiceMainFix ref={mainFixRef} />
      </div>
    </div>
  );
}

export default AdminServiceFixPage;
