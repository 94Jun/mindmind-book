import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styles from "./Calendar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_NEXT_MONTH, SET_PREV_MONTH } from "../../modules/calendar";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const today = useSelector((state) => state.calendar.today);
  const settedDay = useSelector((state) => state.calendar.settedDay);
  const content = `${settedDay.year}년 ${settedDay.month}월`;
  const setNextMonthHandler = () => {
    dispatch(SET_NEXT_MONTH());
  };
  const setPrevMonthHandler = () => {
    dispatch(SET_PREV_MONTH());
  };
  return (
    <div className={styles.calendar_header}>
      <button onClick={setPrevMonthHandler}>
        <ArrowBackIosNewOutlinedIcon fontSize="small" />
      </button>
      <div className={styles.header_text}>{content}</div>
      <button onClick={setNextMonthHandler}>
        <ArrowForwardIosOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
};

export default CalendarHeader;
