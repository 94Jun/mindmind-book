import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disabledDay: [],
  //toLocaleDateString() 형식으로 저장
  selectedTime: "",
  disabledTimeList: [
    {
      date: "2022. 12. 5.",
      time: ["09:00"],
    },
  ],
  disabledTime: [],
};
const schedule = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    ADD_DISABLED_DAY: (state, action) => {
      const { disabledDay } = state;
      disabledDay.push(action.payload);
    },
    SELECT_TIME: (state, action) => {
      state.selectedTime = action.payload;
    },
    RESET_SELECTED_TIME: (state) => {
      state.selectedTime = "";
    },
    SET_DISABLED_TIME: (state, action) => {
      state.disabledTime = action.payload;
    },
  },
});
export const {
  ADD_DISABLED_DAY,
  SELECT_TIME,
  RESET_SELECTED_TIME,
  SET_DISABLED_TIME,
} = schedule.actions;
export default schedule.reducer;
