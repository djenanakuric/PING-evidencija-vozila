import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchCars} from './Api/index'

/* Actions */

export const loadCars = createAsyncThunk("cars/load", async () => {
    const response = await fetchCars();
    await response.data

    return {cars : response.data}
})

/* Selectors */

const selectCarsState = (rootState) => rootState.cars;
export const selectCarsList = (rootState) =>
  selectCarsState(rootState).cars;


/* Reducer */

const initialState = {
  cars: [],
};

const reducer = createReducer(initialState, {
  [loadCars.pending]: (state) => {
    state.carsLoading = true;
  },

  [loadCars.fulfilled]: (state, action) => {
    console.log("CARSS")
    state.carsLoading = false;
    state.cars = action.payload.cars;
  },

  [loadCars.rejected]: (state) => {
    state.carsLoading = false;
    state.error =
      "Error, something went wrong. Contact support if problem persis";
  },
}
);

export default reducer;