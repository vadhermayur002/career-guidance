import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → redirect to login
  if (!token) return <Navigate to="/login" replace />;

  // Logged in but wrong role → redirect to home
  if (allowedRole && role !== allowedRole) return <Navigate to="/" replace />;

  // Authorized
  return children;
};

export default PrivateRoute;
