import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

export const example = createSlice({
  name: "example",
  initialState,
  reducers: {
    INCREMENT: (state) => {
      state.value += 1;
    },
    INCREMENT_BY_AMOUNT: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { INCREMENT, INCREMENT_BY_AMOUNT } = example.actions;
export default example.reducer;
