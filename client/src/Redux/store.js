import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars';

const store = configureStore({
  reducer: { cars: carsReducer }
});

export default store;
