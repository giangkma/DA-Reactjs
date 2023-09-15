import { useDispatch } from "react-redux";
import { Parent } from "./components/Parent";
import {
  decrementAction,
  incrementAction,
  setTypeAction,
} from "../../redux/actions/counter";
import { useState } from "react";
import { setNameAction } from "../../redux/actions/user";

export const CounterPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  const saveType = () => {
    dispatch(setNameAction(value));
  };
  return (
    <div>
      <Parent />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border"
      />
      <button onClick={saveType}>Save</button>
    </div>
  );
};
