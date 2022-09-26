import { configureStore } from "@reduxjs/toolkit";
import carsReducer from './cars';


const store = configureStore({
  reducer: { cars: carsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;