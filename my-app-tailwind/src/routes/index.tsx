import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "./data";

export const AppRoutes = () => {
  return (
    <>
      <div className="text-center flex gap-4 items-center justify-center py-3">
        <Link to="/home">Home</Link>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Todo
        </NavLink>
      </div>

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
