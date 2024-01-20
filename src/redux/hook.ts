import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Previous State ", store.getState());
  console.log("dispatching ", action);
  next(action);
  console.log("next state", store.getState());
};

export default logger;
