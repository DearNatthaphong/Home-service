import React from "react";
import NavComponent from "../components/homepage/Nav.jsx";
import LoginForm from "../components/login-page/login-form.jsx";

//import RegisterPage from "../components/registration/registerPage.jsx";

function LoginPage() {
  return (
    <div className="overflow-x-hidden">
      <NavComponent />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
