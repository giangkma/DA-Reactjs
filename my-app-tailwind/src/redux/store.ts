import { createStore } from "redux";
import { ICounterState, counterReducer } from "./reducers/counter";
import { combineReducers, applyMiddleware } from "redux";
import { IUserState, userReducer } from "./reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";

// Create Redux store
export const store = createStore(
  combineReducers({
    counter: counterReducer,
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware())
);

export interface RootState {
  counter: ICounterState;
  user: IUserState;
}
