import BookingTime from "../booking-time/BookingTime";
import styles from "./Calendar.module.css";
import CalendarHeader from "./CalendarHeader";
import CalendarTable from "./CalendarTable";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <CalendarHeader />
      <CalendarTable />
    </div>
  );
};

export default Calendar;
