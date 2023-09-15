import { DECREMENT, INCREMENT, SET_TYPE } from "../const/counter";

export const incrementAction = () => {
  return { type: INCREMENT };
};

export const decrementAction = () => {
  return { type: DECREMENT };
};

export const setTypeAction = (type: string) => {
  return { type: SET_TYPE, payload: type };
};
