import axios from "axios";
import { incrementAction } from "../actions/counter";
import { AppDispatch, AppGetState } from "../store";

export const incrementActionThunk = () => {
  return async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(incrementAction());
  };
};

const mockGetApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 12, 2, 3, 4, 4, 44, 4]);
    }, 1000);
  });
};
