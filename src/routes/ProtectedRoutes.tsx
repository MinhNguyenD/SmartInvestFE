import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated()) {
    console.log("test");
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
