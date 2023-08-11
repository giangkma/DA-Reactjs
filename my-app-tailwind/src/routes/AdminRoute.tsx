import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: any;
}
// HOC - Higher Order Component
export const AdminRoute = ({ children }: IProps) => {
  const isAdmin = true;

  if (!isAdmin) return <Navigate to="/home" />;

  return children;
};
