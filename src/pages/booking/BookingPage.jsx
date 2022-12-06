import BookingTime from "../../components/booking-time/BookingTime";
import Test from "../../components/booking-time/Test";
import Calendar from "../../components/calendar/Calendar";
import styles from "../Pages.module.css";

const BookingPage = () => {
  return (
    <div className={styles.page_container}>
      <h2>예약하기</h2>
      <p>1. 상담사 지정</p>
      <p>2. 달력 및 시간 설정</p>
      <p>선생님 : 상담 일정 세팅</p>
      <p>관리자 : 상담사별 상담 불가 시간 설정, 휴가 설정 등</p>
      <div className={styles.booking_wrap}>
        <Calendar />
        <BookingTime />
      </div>
      <Test />
    </div>
  );
};

export default BookingPage;
