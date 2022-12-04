import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, INCREMENT_BY_AMOUNT } from "../modules/example";

const Example = () => {
  const dispatch = useDispatch();
  const exampleValue = useSelector((state) => {
    return state.example.value;
  });
  const incrementValue = () => {
    dispatch(INCREMENT());
  };
  const incrementValueByAmount = () => {
    dispatch(INCREMENT_BY_AMOUNT(3));
  };
  return (
    <div>
      <h1>redux-toolkit 예제 (카운터)</h1>
      <button onClick={incrementValue}>+1</button>
      <button onClick={incrementValueByAmount}>+3</button>
      <p>{exampleValue}</p>
    </div>
  );
};

export default Example;
