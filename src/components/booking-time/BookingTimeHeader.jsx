import styles from "./BookingTime.module.css";
import { useSelector, useDispatch } from "react-redux";
import MainButton from "../UI/MainButton";
import { ADD_BOOKING } from "../../modules/booking";
import {
  RESET_SELECTED_TIME,
  SET_DISABLED_TIME_LIST,
} from "../../modules/schedule";
import { setDoc, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const BookingTimeHeader = () => {
  const dispatch = useDispatch();
  const disabledTime = useSelector((state) => state.schedule.disabledTime);
  const disabledTimeList = useSelector(
    (state) => state.schedule.disabledTimeList
  );
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const selectedTime = useSelector((state) => state.schedule.selectedTime);
  const currentUser = useSelector((state) => state.login.currentUser);
  const content = `${selectedDay.year}. ${selectedDay.month}. ${selectedDay.date}.`;

  const addBookingHandler = async () => {
    try {
      const userRef = doc(db, "userList", currentUser);
      const userSnap = await getDoc(userRef);
      let user;
      if (userSnap.exists()) {
        user = userSnap.data();
      }
      console.log(user);
      const addedBooking = {
        bid: Math.random().toString(),
        booker: user.uid,
        bookerName: user.name,
        bookerEmail: user.email,
        time: content + " " + selectedTime,
      };

      await setDoc(doc(db, "bookingList", addedBooking.bid), addedBooking);
      await setDoc(doc(db, "disabledTimeList", content), {
        time: disabledTime,
      });
      const disalbedTimeListRef = doc(db, "disabledTimeList", content);
      await updateDoc(disalbedTimeListRef, { time: arrayUnion(selectedTime) });
      dispatch(ADD_BOOKING(addedBooking));
      const exsistingDisabledTimeIdx = disabledTimeList.findIndex((item) => {
        return item.date === content;
      });
      let updatedDisabledTimeList = [...disabledTimeList];
      if (exsistingDisabledTimeIdx !== -1) {
        const temp = updatedDisabledTimeList[exsistingDisabledTimeIdx];
        updatedDisabledTimeList[exsistingDisabledTimeIdx] = {
          ...temp,
          time: [...temp.time, selectedTime],
        };
      } else {
        updatedDisabledTimeList.push({
          date: content,
          time: [selectedTime],
        });
      }
      dispatch(SET_DISABLED_TIME_LIST(updatedDisabledTimeList));
    } catch (e) {
      console.log("예약 실패", e);
    }
    dispatch(RESET_SELECTED_TIME());
  };
  //고객이 예약 추가

  const subContent = selectedTime ? (
    <MainButton className={styles.booking_btn} onClick={addBookingHandler}>
      예약 완료
    </MainButton>
  ) : (
    <p className={styles.booking_sub_text}>예약할 시간을 선택해주세요</p>
  );
  return (
    <div className={styles.booking_time_header}>
      <div className={styles.header_text}>
        예약 일시 : {content}
        {selectedTime}
      </div>
      <div>{subContent}</div>
    </div>
  );
};

export default BookingTimeHeader;
