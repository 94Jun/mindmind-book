import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disabledDay: [],
  //toLocaleDateString() 형식으로 저장
  availableTime: [],
};
const schedule = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    ADD_DISABLE_DAY: (state, action) => {
      const { disabledDay } = state;
      disabledDay.push(action.payload);
    },
  },
});
export const { ADD_DISABLE_DAY } = schedule.actions;
export default schedule.reducer;
