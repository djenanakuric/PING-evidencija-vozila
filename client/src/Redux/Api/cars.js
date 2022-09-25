import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCars as jhjk } from ".";

export const fetchCars = createAsyncThunk('car/fetchCars', async ( thunkAPI) => {
    try {
        const response =  await jhjk();
        console.log(response)
    } catch (error) {
        console.log(error.message)
    }
})