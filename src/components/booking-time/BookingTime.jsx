import styles from "./BookingTime.module.css";
import BookingTimeHeader from "./BookingTimeHeader";
import { useDispatch, useSelector } from "react-redux";
import BookingTimeItem from "./BookingTimeItem";
import { SET_DISABLED_TIME } from "../../modules/schedule";
import { useEffect } from "react";

const BookingTime = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const disabledTime = useSelector((state) => state.schedule.disabledTime);
  const disabledTimeList = useSelector(
    (state) => state.schedule.disabledTimeList
  );
  const timeList = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
  const nowValue = Number(
    new Date().toTimeString().slice(0, 5).split(":").join("")
  );

  //현재 컴포넌트에서 오늘에 해당하는 disabledTime 추가... 시간이 지남에 따라 push

  useEffect(() => {
    const selectedDate = new Date(
      selectedDay.year,
      selectedDay.month - 1,
      selectedDay.date
    ).toLocaleDateString();
    const updatedDisabledTime = [];
    const currentObj = disabledTimeList.find((item) => {
      return selectedDate === item.date;
    });
    if (currentObj?.time) {
      currentObj.time.map((time) => {
        updatedDisabledTime.push(time);
      });
    }
    dispatch(SET_DISABLED_TIME(updatedDisabledTime));
  }, [selectedDay]);
  //현재 선택된 날짜의 disableTime을 세팅
  //selected가 업데이트 될 때마다 실행

  return (
    <div className={styles.booking_time}>
      <BookingTimeHeader />
      <ul className={styles.booking_time_list}>
        {timeList.map((time) => {
          return <BookingTimeItem key={Math.random().toString()} time={time} />;
        })}
      </ul>
    </div>
  );
};

export default BookingTime;
