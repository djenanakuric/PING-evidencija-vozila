import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars, removeCars, createCar, editCar } from './Api/index';
/* Actions */

export const loadCars = createAsyncThunk('cars/load', async () => {
  const response = await fetchCars();

  return { cars: response.data };
});

export const deleteCars = createAsyncThunk('cars/delete', async (id) => {
  await removeCars(id);
  return { id };
});

export const addCar = createAsyncThunk('cars/add', async (data) => {
  await createCar(data);
  return { ...data };
});

export const updateCar = createAsyncThunk(
  'cars/update',
  async ({ id, data }) => {
    await editCar(id, data);
    return [...data];
  }
);

/* Selectors */

const selectCarsState = (rootState) => rootState.cars;
export const selectCarsList = (rootState) => selectCarsState(rootState).cars;

/* Reducer */

const initialState = {
  cars: [],
};

const reducer = createReducer(initialState, {
  [loadCars.fulfilled]: (state, action) => {
    state.carsLoading = false;
    state.cars = action.payload.cars;
  },

  [loadCars.rejected]: (state) => {
    state.carsLoading = false;
    state.error =
      'Error, something went wrong. Contact support if problem persis';
  },
  [deleteCars.fulfilled]: (state, action) => {
    state.cars = state.cars.filter((car) => car.Id !== action.payload.id);
  },
  [addCar.fulfilled]: (state, action) => {
    state.cars = state.cars.push(action.payload);
  },
  [updateCar.fulfilled]: (state, action) => {
    state.cars = state.cars;
  },
});

export default reducer;
