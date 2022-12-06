import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_BOOKING_LIST } from "../../modules/booking";

const Test = () => {
  const dispatch = useDispatch();
  const bookingList = useSelector((state) => state.booking.bookingList);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "bookingList"));
      const loadedBookingList = [];
      querySnapshot.forEach((doc) => {
        loadedBookingList.push(doc.data());
      });
      dispatch(SET_BOOKING_LIST(loadedBookingList));
    };
    getData();
  }, []);
  return (
    <div>
      {bookingList &&
        bookingList.map((booking) => {
          return (
            <>
              <p>예약 아이디 : {booking.bookerEmail}</p>
              <p>예약자 이름 : {booking.bookerName}</p>
              <p>예약 일시 : {booking.time}</p>
            </>
          );
        })}
    </div>
  );
};

export default Test;
