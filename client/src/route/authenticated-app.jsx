import React from "react";
import { useAuth } from "../context/authentication";
import AutenticatedAdmin from "../route/autenticated-admin";
import AutenticatedUser from "../route/autenticated-user";

function AuthenticatedApp() {
  const { isToken } = useAuth();
  return isToken.role === "admin" ? (
    <AutenticatedAdmin />
  ) : (
    <AutenticatedUser />
  );
}

export default AuthenticatedApp;
