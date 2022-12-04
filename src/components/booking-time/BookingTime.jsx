import styles from "./BookingTime.module.css";
import BookingTimeHeader from "./BookingTimeHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AUTO_SELECT_NEXT_DATE } from "../../modules/calendar";
import { SET_NEXT_MONTH } from "../../modules/calendar";
import BookingTimeItem from "./BookingTimeItem";

const BookingTime = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const disabledDay = useSelector((state) => state.schedule.disabledDay);
  // console.log(
  //   Number(new Date().toTimeString().slice(0, 5).split(":").join(""))
  // );
  return (
    <div className={styles.booking_time}>
      <BookingTimeHeader />
      <ul className={styles.booking_time_list}>
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
        <BookingTimeItem />
      </ul>
    </div>
  );
};

export default BookingTime;
