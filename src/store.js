import { configureStore } from "@reduxjs/toolkit";
import ExampleReducer from "./modules/example";
import LoginReducer from "./modules/login";
import CalendarReducer from "./modules/calendar";
import ScheduleReducer from "./modules/schedule";

export default configureStore({
  reducer: {
    example: ExampleReducer,
    login: LoginReducer,
    calendar: CalendarReducer,
    schedule: ScheduleReducer,
  },
});
