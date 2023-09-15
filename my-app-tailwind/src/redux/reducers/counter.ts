import { DECREMENT, INCREMENT, SET_TYPE } from "../const/counter";
import { RootState } from "../store";

// Reducer function
export interface ICounterState {
  number: number;
  type: string;
}

const initialState: ICounterState = {
  number: 0,
  type: "",
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT: {
      const newState = { ...state };
      newState.number = newState.number + 1;
      return newState;
    }
    case DECREMENT: {
      const newState = { ...state };
      newState.number = newState.number - 1;
      return newState;
    }
    case SET_TYPE: {
      const newState = { ...state };
      newState.type = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

// custom selector
export const getCounterNumber = (state: RootState) => state.counter.number;
export const getCounterType = (state: RootState) => state.counter.type;
