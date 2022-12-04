import styles from "./BookingTime.module.css";
import { useSelector } from "react-redux";
import MainButton from "../UI/MainButton";

const BookingTimeHeader = () => {
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const selectedTime = useSelector((state) => state.schedule.selectedTime);
  const content = `${selectedDay.year}. ${selectedDay.month}. ${selectedDay.date}.`;
  const subContent = selectedTime ? (
    <MainButton className={styles.booking_btn}>예약 완료</MainButton>
  ) : (
    <p className={styles.booking_sub_text}>예약할 시간을 선택해주세요</p>
  );
  return (
    <div className={styles.booking_time_header}>
      <div className={styles.header_text}>
        예약 일시 : {content} {selectedTime}
      </div>
      <div>{subContent}</div>
    </div>
  );
};

export default BookingTimeHeader;
