import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { fetchReports } from './Api';

/* Actions */

export const loadReports = createAsyncThunk('/reports/load', async ({carId, startDate, endDate}) => {
  const response = await fetchReports(carId, startDate, endDate);
  return {reports: response.data };
});

/* Selectors */

const selectReportsState = (rootState) => rootState.reports;
export const selectReportsList = (rootState) =>
  selectReportsState(rootState).reports;

/* Reducer */

const initialState = {
  reports: []
};

const reducer = createReducer(initialState, {
  [loadReports.fulfilled]: (state, action) => {
    state.reports = action.payload.reports;
  },

  [loadReports.rejected]: (state) => {
    state.error =
      'Error, something went wrong. Contact support if problem persis';
  },
});

export default reducer;
