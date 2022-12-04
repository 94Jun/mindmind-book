import styles from "./Calendar.module.css";
const CalendarDay = () => {
  return (
    <thead className={styles.calendar_day}>
      <tr>
        <th>일</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
        <th>토</th>
      </tr>
    </thead>
  );
};

export default CalendarDay;
