import { useSelector } from "react-redux";
import {
  getCounterNumber,
  getCounterType,
} from "../../../redux/reducers/counter";
import { getUserName } from "../../../redux/reducers/user";

export const Children = () => {
  const count = useSelector(getCounterNumber);
  const type = useSelector(getCounterType);
  const name = useSelector(getUserName);

  return (
    <div>
      {count} - {type} - {name}
    </div>
  );
};
