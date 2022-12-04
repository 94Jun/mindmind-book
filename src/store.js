import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./modules/login";
import CalendarReducer from "./modules/calendar";
import ScheduleReducer from "./modules/schedule";

export default configureStore({
  reducer: {
    login: LoginReducer,
    calendar: CalendarReducer,
    schedule: ScheduleReducer,
  },
});
