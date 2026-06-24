import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slice/counterSlice";

export const  store = configureStore({
  reducer: {
    countSlice: countSlice,
  },
});
