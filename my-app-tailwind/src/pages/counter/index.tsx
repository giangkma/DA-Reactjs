import { useState } from "react";
import { decrementAction } from "../../redux/actions/counter";
import { setNameAction } from "../../redux/actions/user";
import { useAppDispatch } from "../../redux/store";
import { incrementActionThunk } from "../../redux/thunks/counter";
import { Parent } from "./components/Parent";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import classNames from "classnames";

export const StyledButton = styled(Button)`
  background-color: blue;

  .MuiTouchRipple-root {
    display: none;
  }
`;

let TypographyH1 = styled.div<{
  isDark?: boolean;
  fontSize?: string;
}>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "25px")};

  a {
    font-size: 10px;
    color: red;
  }
`;

export const CounterPage = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const increment = () => {
    dispatch(incrementActionThunk());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  const saveType = () => {
    dispatch(setNameAction(value));
  };

  const isDark = true;
  return (
    <div>
      {/* <TypographyH1 isDark fontSize={"40px"}>
        Some text
        <br />
        <a href="#">click me</a>
      </TypographyH1>
      <Parent />
      <StyledButton variant="outlined">Text</StyledButton>
      <StyledButton variant="outlined">Text</StyledButton>
      <StyledButton variant="outlined">Text</StyledButton>

      <Button variant="outlined">Text</Button> */}

      <button
        className={classNames("text-2xl", {
          "bg-black text-white": isDark,
          "bg-white text-black": !isDark,
        })}
        onClick={increment}
      >
        Increment
      </button>
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
