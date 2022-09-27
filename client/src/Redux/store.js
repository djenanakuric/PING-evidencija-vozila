import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars';
import travelApplicationsReducer from './travelApplications';
import reportReducer from './reports';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    travelApplications: travelApplicationsReducer,
    reports: reportReducer,
  },
});

export default store;
