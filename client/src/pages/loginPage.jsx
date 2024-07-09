import React from "react";
import NavComponent from "../components/homepage/Nav.jsx";
import LoginForm from "../components/loginPage/loginForm.jsx";
import RegisterPage from "../components/registration/registerPage.jsx";

function LoginPage() {
  return (
    <section className="LoginPage">
      <NavComponent />
      <LoginForm />
      <RegisterPage />
    </section>
  );
};

export default LoginPage;
