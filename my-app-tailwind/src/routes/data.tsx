import { Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

export const ROUTES = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
