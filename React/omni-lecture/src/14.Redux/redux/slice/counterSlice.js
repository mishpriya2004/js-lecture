import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { no1: 900, no2: 200 },
  reducers: {
    increment: (state) => {
      state.no1 += 1;
    },
    decrement: (state) => {
      state.no1 -= 1;
    },
  },
});

export default countSlice.reducer;

export const counterSliceAction = countSlice.actions;
