import styles from "./BookingTime.module.css";
import { useSelector } from "react-redux";

const BookingTimeHeader = () => {
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const content = `${selectedDay.year}. ${selectedDay.month}. ${selectedDay.date}.`;
  return (
    <div className={styles.booking_time_header}>
      예약 일시 : {content} 09:00
    </div>
  );
};

export default BookingTimeHeader;
