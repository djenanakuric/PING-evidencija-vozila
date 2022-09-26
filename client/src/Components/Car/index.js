import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import CarsTable from '../Table/carsTable';
import AddCar from '../Modal/addCar';

const CarInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <h2>Popis vozila </h2>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Dodaj vozilo</Button>
        <AddCar isOpen={isOpen} setIsOpen={setIsOpen} data={null} />
      </div>
      <div>
        <CarsTable/>
      </div>
    </div>
  );
};

export default CarInfo;
