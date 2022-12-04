import styles from "./BookingTime.module.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_TIME } from "../../modules/schedule";

const BookingTimeItem = (props) => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.schedule.selectedTime);
  const disabledTime = useSelector((state) => state.schedule.disabledTime);
  const isDisalbed = disabledTime.includes(props.time);
  const selectTimeHandler = () => {
    if (!isDisalbed) {
      dispatch(SELECT_TIME(props.time));
    }
  };

  return (
    <li
      className={`${styles.booking_time_item} ${
        selectedTime === props.time && styles.selected
      } ${isDisalbed && styles.disabled}`}
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
