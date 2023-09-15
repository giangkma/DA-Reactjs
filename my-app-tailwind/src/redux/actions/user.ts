import { SET_NAME } from "../const/user";

export const setNameAction = (name: string) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
