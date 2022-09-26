import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5001'});

export const fetchCars = async () => api.get('/cars');
export const removeCars = async (id) => api.delete(`/cars/${id}`);
export const createCar = async (data) => api.post('/cars', data);
export const editCar = async (id, data) =>api.patch(`/cars/${id}`, data);
