import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars';
import travelApplicationsReducer from './travelApplications';

const store = configureStore({
  reducer: { cars: carsReducer,
  travelApplications: travelApplicationsReducer }
});

export default store;
