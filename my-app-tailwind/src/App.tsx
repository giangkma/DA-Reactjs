import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Loading } from "./components/Loading";

export const App = () => {
  return (
    <BrowserRouter>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  );
};
