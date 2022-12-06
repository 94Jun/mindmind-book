import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./modules/login";
import CalendarReducer from "./modules/calendar";
import ScheduleReducer from "./modules/schedule";
import UserReducer from "./modules/user";
import BookingReducer from "./modules/booking";

export default configureStore({
  reducer: {
    login: LoginReducer,
    calendar: CalendarReducer,
    schedule: ScheduleReducer,
    user: UserReducer,
    booking: BookingReducer,
  },
});
