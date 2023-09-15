import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { store } from "./redux/store";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
};
