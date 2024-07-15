import React from "react";
import LoginForm from "../components/login-page/login-form.jsx";
import Header from "../components/header.jsx";

//import RegisterPage from "../components/registration/registerPage.jsx";

function LoginPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
