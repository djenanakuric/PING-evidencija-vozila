import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import {
  fetchTravelApplications,
  createTravelApplication,
  editTravelApplication,
} from './Api';

/* SELECTORS */
const selectTravelApplicationState = (rootState) =>
  rootState.travelApplications;

export const selectTravelApplicationList = (rootState) =>
  selectTravelApplicationState(rootState).travelApplications;

/* ACTIONS */
export const loadTravelApplications = createAsyncThunk(
  'travelApplications/load',
  async () => {
    const response = await fetchTravelApplications();

    return { travelApplications: response.data };
  }
);

export const addTravelApplication = createAsyncThunk(
  'travelApplications/add',
  async (data) => {
    await createTravelApplication(data);
    return { ...data };
  }
);

export const updateTravelApplication = createAsyncThunk(
  'travelApplications/edit',
  async ({ id, data }) => {
    await editTravelApplication(id, data);
    return { id, Status: data.Status };
  }
);

/* REDUCERS */
const initialState = {
  travelApplications: [],
};

const reducer = createReducer(initialState, {
  [loadTravelApplications.fulfilled]: (state, action) => {
    state.travelApplications = action.payload.travelApplications;
  },

  [loadTravelApplications.rejected]: (state) => {
    state.error =
      'Error, something went wrong. Contact support if problem persis';
  },
  [addTravelApplication.fulfilled]: (state, action) => {
    state.travelApplications = state.travelApplications.push(action.payload);
  },
  [updateTravelApplication.fulfilled]: (state, action) => {
    const { id, Status } = action.payload;

    state.travelApplications = state.travelApplications.map((tApp) =>
      (tApp.Id === id ? { ...tApp, Status } : tApp)
    );
  },
});

export default reducer;
