import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./data";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </>
  );
};
