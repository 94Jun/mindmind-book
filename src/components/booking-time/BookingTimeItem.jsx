import styles from "./BookingTime.module.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
const BookingTimeItem = () => {
  return (
    <li className={styles.booking_time_item}>
      <span>
        <AccessTimeOutlinedIcon />
      </span>
      <span>09:00</span>
    </li>
  );
};

export default BookingTimeItem;
