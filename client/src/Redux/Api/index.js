import axios, { Axios } from 'axios';

const api = axios.create({baseURL: "http://localhost:5001"});

export const fetchCars = async () => api.get("/cars");
export const getCars = (carId) => Axios.get(`${api}/cars`, { params: {carId}});
