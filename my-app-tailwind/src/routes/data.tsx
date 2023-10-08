import { Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import { CounterPage } from "../pages/counter";
import { CartPage } from "../pages/cart";

export const ROUTES = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
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
