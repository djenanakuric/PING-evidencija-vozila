import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import CarsTable from '../Table/carsTable';
import AddCar from '../Modal/addCar';
import {selectStoriesList} from "../../Redux/cars";
import {useSelector} from "react-redux";
import {forEach} from "react-bootstrap/ElementChildren";

const CarInfo = () => {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <div>
      <div>
        <h2>Popis vozila </h2>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Dodaj vozilo</Button>
        <AddCar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div>
        <CarsTable/>
      </div>
    </div>
  );
};

export default CarInfo;
