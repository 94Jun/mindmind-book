import styles from "./Calendar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AUTO_SELECT_NEXT_DATE, SELECT_DATE } from "../../modules/calendar";
import { ADD_DISABLED_DAY } from "../../modules/schedule";
import { useEffect, useState } from "react";
import { RESET_SELECTED_TIME } from "../../modules/schedule";
const CalendarDateTd = (props) => {
  const dispatch = useDispatch();
  const settedDay = useSelector((state) => state.calendar.settedDay);
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const disabledDay = useSelector((state) => state.schedule.disabledDay);
  const [isSelected, setIsSelected] = useState(false);
  const now = new Date();
  const date = new Date(settedDay.year, settedDay.month - 1, props.date);

  useEffect(() => {
    if (date.getDay() === 0 || now.valueOf() > date.valueOf()) {
      dispatch(ADD_DISABLED_DAY(date.toLocaleDateString()));
    }
  }, []);
  const isDisabled =
    disabledDay.includes(date.toLocaleDateString()) && props.date;

  useEffect(() => {
    if (
      isDisabled &&
      settedDay.year === selectedDay.year &&
      settedDay.month === selectedDay.month &&
      selectedDay.date === props.date
    ) {
      dispatch(AUTO_SELECT_NEXT_DATE());
    }
  }, [isDisabled, selectedDay]);

  const selectDateHandler = () => {
    if (!isDisabled && props.date) {
      dispatch(SELECT_DATE(props.date));
      dispatch(RESET_SELECTED_TIME());
    }
    return;
  };

  useEffect(() => {
    if (
      settedDay.year === selectedDay.year &&
      settedDay.month === selectedDay.month &&
      props.date === selectedDay.date &&
      !isDisabled
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [settedDay, selectedDay]);

  return (
    <td
      className={`${!isDisabled && props.date && styles.mouse_over} ${
        isDisabled && styles.disabled
      } ${isSelected && styles.active}`}
      onClick={selectDateHandler}
    >
      {props.date}
    </td>
  );
};

export default CalendarDateTd;
