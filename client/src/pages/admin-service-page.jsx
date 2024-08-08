import React, { useState } from "react";
import AdminServiceSideBar from "../components/admin-sidebar/admin-service-sidebar";
import AdminServiceHeader from "../components/admin-service-page/admin-service-header";
import AdminServiceMain from "../components/admin-service-page/admin-service-main";

function AdminServicePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="w-screen h-screen bg-background flex overflow-clip font-prompt">
      <AdminServiceSideBar />
      <div className="w-full h-full flex flex-col">
        <AdminServiceHeader onSearch={handleSearch} />
        <AdminServiceMain searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default AdminServicePage;
