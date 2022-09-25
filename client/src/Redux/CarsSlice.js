import { createSlice,nanoid } from '@reduxjs/toolkit';
import { fetchCars } from './Api/cars';

const initialState = {
  cars: [{
    id: '1',
    carModel: 'Citroen',
    carType: 'C4',
    carNumber: '54dgfsdg4',
    motorNumber:'4545fds1gs5',
    motorPower:'15',
    flued:'dizel',
    yearManufacture:'2012'
  },
  {
    id: '2',
    carModel: 'Audi',
    carType: 'C4',
    carNumber: '54dgfsdg4',
    motorNumber:'4545fds1gs5',
    motorPower:'15',
    flued:'dizel',
    yearManufacture:'2012'
  }
],
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    FETCH_CARS: (state, action) => {
      return action.payload;
    },
    ADD_CARS: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        carModel,
        carType,
        carNumber,
        motorNumber,
        motorPower,
        flued,
        yearManufacture
      ) {
        return{
          payload: {
            id: nanoid(),
            carModel,
            carType,
            carNumber,
            motorNumber,
            motorPower,
            flued,
            yearManufacture
        }
      }
        
      },
    },
  },
});

export const { FETCH_CARS, ADD_CARS } = carsSlice.actions;

export default carsSlice.reducer;

export const selectAllCars = (state) => state.cars;