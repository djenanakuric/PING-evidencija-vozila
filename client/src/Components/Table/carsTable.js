import { useSelector, useDispatch } from 'react-redux';
import { selectCarsList, loadCars, deleteCars, updateCar } from '../../Redux/cars';
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import AddCarModal from '../Modal/addCar';

const CarsTable = () => {
  const cars = useSelector(selectCarsList);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteCars(id));
  };

  const handleEdit = (car) => {
    setData(car);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(loadCars());
  }, [dispatch]);

  return (
    <div>
      {isOpen && <AddCarModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Marka </th>
            <th align="center">Tip</th>
            <th align="center">Broj sasije</th>
            <th align="center">Broj motora</th>
            <th align="center">Snaga motora</th>
            <th align="center">Vrsta goriva</th>
            <th align="center">Godina proizvodnje</th>
            <th align="center">Akcije</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.Id}>
              <td>{car.CarModel}</td>
              <td>{car.CarType} </td>
              <td align="center">{car.CarNumber}</td>
              <td align="center">{car.MotorNumber}</td>
              <td align="center">
                {`${car.MotorPower} ${car.MotorPowerUnit}`}
              </td>
              <td align="center">{car.Flue}</td>
              <td align="center">{car.YearManufactured}</td>
              <td align="center">
                <i
                  class="bx bx-edit-alt"
                  onClick={() => handleEdit(car)}
                ></i>
                <i
                  class="bx bx-trash"
                  onClick={() => {
                    handleDelete(car.Id);
                  }}
                ></i>
                <i class="bx bx-check"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CarsTable;
