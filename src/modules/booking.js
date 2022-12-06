import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingList: [],
};
const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    ADD_BOOKING: (state, action) => {
      state.bookingList.push(action.payload);
    },
    SET_BOOKING_LIST: (state, action) => {
      state.bookingList = action.payload;
    },
  },
});
export const { ADD_BOOKING, SET_BOOKING_LIST } = booking.actions;
export default booking.reducer;
