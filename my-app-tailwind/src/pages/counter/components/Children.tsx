import {
  getCounterNumber,
  getCounterType,
} from "../../../redux/reducers/counter";
import { getUserName } from "../../../redux/reducers/user";
import { useAppSelector } from "../../../redux/store";

export const Children = () => {
  const count = useAppSelector(getCounterNumber);
  const type = useAppSelector(getCounterType);
  const name = useAppSelector(getUserName);

  return (
    <div>
      {count} - {type} - {name}
    </div>
  );
};
