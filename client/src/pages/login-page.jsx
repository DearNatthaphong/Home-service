import React from "react";
import LoginForm from "../components/login-page/login-form.jsx";
import ServiceHeader from "../components/service-list-page/service-header.jsx";

function LoginPage() {
  return (
    <div className="overflow-x-hidden">
      <ServiceHeader />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
