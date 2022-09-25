import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CarsTable from '../Table/carsTable';
import AddCar from '../Modal/addCar';
//import { fetchCars } from '../../Api';
import {useSelector, useDispatch} from 'react-redux';
// import { FETCH_CARS } from '../../Redux/CarsSlice';
import {setCars} from "../../Redux/test";
import {fetchCars} from "../../Redux/Api/test";

const CarInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const cars=useSelector( (state) => state.cars);
  // const dispatch = useDispatch();
  // console.log(dispatch(FETCH_CARS(cars)));

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

 const nesto = async () => {
    await dispatch(fetchCars());

  }


  return (
    <div>
      <div>
        <h2>Popis vozila </h2>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Dodaj vozilo</Button>
        <Button onClick={() => nesto()}>Pozovi</Button>
        <AddCar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div>
        <CarsTable />
      </div>
    </div>
  );
};

export default CarInfo;
