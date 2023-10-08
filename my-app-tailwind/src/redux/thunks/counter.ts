import axios from "axios";
import { incrementAction } from "../actions/counter";
import { AppDispatch, AppGetState } from "../store";

export const incrementActionThunk = () => {
  return async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(incrementAction());
  };
};
