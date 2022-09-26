import { addCar, fetchCars, removeCar, editCar } from '../DataAccessLayer/car.js';

const getCars = async (req, res) => {
  try {
    console.log("dosao")
    const cars = await fetchCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createCar = async (req, res) => {
  try {
    const newCar = await addCar(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await editCar(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removeCar(id, req.params);
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getCars, createCar, updateCar, deleteCar };
