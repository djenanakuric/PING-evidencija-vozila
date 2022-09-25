import {createSlice} from "@reduxjs/toolkit";
import {fetchCars} from "./Api/test"

const initialState = {
  cars: []
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    }
  },
  extraReducers: {
    [fetchCars.fulfilled]:(state,action) => {
      state.cars = action.payload.data
    }
  }
})

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
