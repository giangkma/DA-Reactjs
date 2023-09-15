import { SET_NAME } from "../const/user";
import { RootState } from "../store";

// Reducer function
export interface IUserState {
  name: string;
}

const initialState: IUserState = {
  name: "",
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NAME: {
      const newState = { ...state };
      newState.name = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export const getUserName = (state: RootState) => state.user.name;
