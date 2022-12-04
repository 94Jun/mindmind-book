import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn"),
  currentUser: {},
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOG_IN: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      localStorage.setItem("isLoggedIn", true);
    },
    LOG_OUT: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
      localStorage.removeItem("isLoggedIn");
    },
  },
});
export const { LOG_IN, LOG_OUT } = login.actions;
export default login.reducer;
