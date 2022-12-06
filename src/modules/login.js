import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn"),
  currentUser: localStorage.getItem("currentUser"),
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOG_IN: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", action.payload);
    },
    LOG_OUT: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
      state.currentUser = "";
      localStorage.removeItem("currentUser");
    },
  },
});
export const { LOG_IN, LOG_OUT } = login.actions;
export default login.reducer;
