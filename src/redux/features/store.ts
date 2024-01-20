import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import logger from "../hook";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
