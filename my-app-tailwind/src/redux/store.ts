import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";

import Sessionstorage from "redux-persist/lib/storage/session";
import Localstorage from "redux-persist/lib/storage";

import thunk, { ThunkDispatch } from "redux-thunk";
import { counterReducer } from "./reducers/counter";
import { userReducer } from "./reducers/user";

const counterConfig = {
  key: "counter",
  storage: Localstorage,
  whitelist: ["number"],
};

const userConfig = {
  key: "user",
  storage: Sessionstorage,
};

const rootReducer = combineReducers({
  counter: persistReducer(counterConfig, counterReducer),
  user: persistReducer(userConfig, userReducer),
});

const persistedReducer = rootReducer;

// Create Redux store
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export type RootState = ReturnType<AppGetState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => ThunkDispatch<RootState, unknown, Action> =
  useDispatch;

export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
