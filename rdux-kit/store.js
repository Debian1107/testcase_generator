import { configureStore } from "@reduxjs/toolkit";
import mysliceReducer from "./mySlice";

export const store = configureStore({
  reducer: mysliceReducer,
});
