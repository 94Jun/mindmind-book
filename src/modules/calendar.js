import { createSlice } from "@reduxjs/toolkit";
const now = new Date();
const initialState = {
  today: {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  },
  settedDay: {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  },
  selectedDay: {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  },
};
const calendar = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    SET_NEXT_MONTH: (state) => {
      const { settedDay } = state;
      if (settedDay.month < 12) {
        settedDay.month += 1;
      } else {
        settedDay.month = 1;
        settedDay.year += 1;
      }
    },
    SET_PREV_MONTH: (state) => {
      const { settedDay, today } = state;
      if (settedDay.year === today.year && settedDay.month === today.month) {
        alert("과거 일자는 확인할 수 없습니다.");
        return;
      }
      if (settedDay.month !== 1) {
        settedDay.month -= 1;
      } else {
        settedDay.month = 12;
        settedDay.year -= 1;
      }
    },
    SELECT_DATE: (state, action) => {
      const { selectedDay, settedDay } = state;
      selectedDay.year = settedDay.year;
      selectedDay.month = settedDay.month;
      selectedDay.date = action.payload;
    },
    AUTO_SELECT_NEXT_DATE: (state) => {
      const { selectedDay } = state;
      const lastDate = new Date(
        selectedDay.year,
        selectedDay.month,
        0
      ).getDate();
      if (lastDate === selectedDay.date) {
        if (selectedDay.month === 12) {
          selectedDay.year += 1;
          selectedDay.month = 1;
        } else {
          selectedDay.month += 1;
        }
        selectedDay.date = 1;
      } else {
        selectedDay.date += 1;
      }
    },
  },
});
export const {
  SET_NEXT_MONTH,
  SET_PREV_MONTH,
  SELECT_DATE,
  AUTO_SELECT_NEXT_DATE,
} = calendar.actions;
export default calendar.reducer;
