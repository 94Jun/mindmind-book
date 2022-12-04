import styles from "./Calendar.module.css";
import CalendarDate from "./CalendarDate";
import CalendarDay from "./CalendarDay";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const CalendarTable = () => {
  const settedDay = useSelector((state) => state.calendar.settedDay);
  const lastDate = new Date(settedDay.year, settedDay.month, 0).getDate();
  const lastDay = new Date(settedDay.year, settedDay.month, 0).getDay();
  const firstDay = new Date(settedDay.year, settedDay.month - 1, 1).getDay();
  const [dateList, setDateList] = useState([]);
  useEffect(() => {
    const tempDateList = Array(lastDate)
      .fill()
      .map((date, idx) => {
        return idx + 1;
      });
    for (let i = 0; i < firstDay; i++) {
      tempDateList.unshift(null);
    }
    for (let i = 0; i < 6 - lastDay; i++) {
      tempDateList.push(null);
    }
    const updatedDateList = [];
    const length = tempDateList.length / 7;
    for (let i = 0; i < length; i++) {
      updatedDateList.push(tempDateList.splice(0, 7));
    }
    setDateList(updatedDateList);
  }, [firstDay, lastDate, lastDay]);
  const content = dateList
    ? dateList.map((dates) => {
        return <CalendarDate key={Math.random().toString()} dates={dates} />;
      })
    : null;
  return (
    <table className={styles.calendar_table}>
      <CalendarDay />
      <tbody>{content}</tbody>
    </table>
  );
};

export default CalendarTable;
