import { Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import { CounterPage } from "../pages/counter";

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
    path: "/counter",
    element: <CounterPage />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
