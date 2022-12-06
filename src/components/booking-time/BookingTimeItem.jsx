import styles from "./BookingTime.module.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_TIME } from "../../modules/schedule";
import { useEffect, useState } from "react";

const BookingTimeItem = (props) => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.schedule.selectedTime);
  const disabledTime = useSelector((state) => state.schedule.disabledTime);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    setIsDisabled(disabledTime.includes(props.time));
  }, [disabledTime]);

  const selectTimeHandler = () => {
    if (!isDisabled) {
      dispatch(SELECT_TIME(props.time));
    }
  };

  return (
    <li
      className={`${styles.booking_time_item} ${
        selectedTime === props.time && styles.selected
      } ${isDisabled && styles.disabled}`}
      onClick={selectTimeHandler}
    >
      <span>
        <AccessTimeOutlinedIcon />
      </span>
      <span>{props.time}</span>
    </li>
  );
};

export default BookingTimeItem;
