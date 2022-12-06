import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userList: [
    {
      uid: "u1",
      email: "hong@gmail.com",
      password: "1234",
      name: "홍길동",
      phone: "010-1234-5678",
      region: "부산시 북구 화명동",
      mySchedule: [],
    },
  ],
  currentUser: localStorage.getItem("currentUser"),
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload;
    },
    ADD_USER: (state, action) => {
      state.userList.push(action.payload);
    },
    SET_USER_LIST: (state, action) => {
      state.userList = action.payload;
    },
  },
});
export const { SET_CURRENT_USER, ADD_USER, SET_USER_LIST } = user.actions;
export default user.reducer;
