import { HomePageView } from "../components/home";
import { AdminPage } from "../pages/Admin";
import { TodoList } from "../pages/TodoList";
import { AdminRoute } from "./AdminRoute";

export const ROUTES = [
  {
    path: "/home",
    element: <HomePageView />,
  },
  { path: "/todo", element: <TodoList /> },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    ),
  },
];
