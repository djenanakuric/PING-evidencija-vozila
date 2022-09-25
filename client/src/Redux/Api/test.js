import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, { Axios } from 'axios';

const api = axios.create({baseURL: "localhost:5001"});

export const fetchCarsApi = async () => api.get("/cars");


export const fetchCars = createAsyncThunk('cars/fetchCars', async (thunkApi) => {
  try {
    return await fetchCarsApi();
  } catch (e) {
    throw new Error(e.message)
  }
})