import styles from "./Calendar.module.css";
import CalendarDateTd from "./CalendarDateTd";
const CalendarDate = (props) => {
  return (
    <tr className={styles.calendar_date}>
      {props.dates.map((date) => {
        return <CalendarDateTd key={Math.random().toString()} date={date} />;
      })}
    </tr>
  );
};

export default CalendarDate;
