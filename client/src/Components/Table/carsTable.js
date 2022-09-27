import { useSelector, useDispatch } from 'react-redux';
import { selectCarsList, loadCars, deleteCars } from '../../Redux/cars';
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCarModal from '../Modal/addCar';
import AddTravelApplicationModal from '../Modal/addTravelApplication';

const CarsTable = () => {
  const cars = useSelector(selectCarsList);
  const [carId, setCarId] = useState('');
  const dispatch = useDispatch();
  const [isOpenCarModal, setIsOpenIsOpenCarModal] = useState(false);
  const [data, setData] = useState(null);
  const [isOpenTravelApplication, setIsOpenTravelApplication] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteCars(id));
  };

  const handleEdit = (car) => {
    setData(car);
    setIsOpenIsOpenCarModal(true);
  };

  const handleCreateTravelApplication = (id) => {
    setCarId(id);
    setIsOpenTravelApplication(true);
  };

  useEffect(() => {
    dispatch(loadCars());
  }, [dispatch]);

  return (
    <div>
      {isOpenCarModal && (
        <AddCarModal
          isOpen={isOpenCarModal}
          setIsOpen={setIsOpenIsOpenCarModal}
          data={data}
        />
      )}

      {isOpenTravelApplication && (
        <AddTravelApplicationModal
          isOpen={isOpenTravelApplication}
          setIsOpen={setIsOpenTravelApplication}
          selectedCarId={carId}
        />
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Marka </th>
            <th>Tip</th>
            <th>Broj sasije</th>
            <th>Broj motora</th>
            <th>Snaga motora</th>
            <th>Vrsta goriva</th>
            <th>Godina proizvodnje</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.Id}>
              <td align="center">{car.CarModel}</td>
              <td align="center">{car.CarType} </td>
              <td align="center">{car.CarNumber}</td>
              <td align="center">{car.MotorNumber}</td>
              <td align="center">
                {`${car.MotorPower} ${car.MotorPowerUnit}`}
              </td>
              <td align="center">{car.Flue}</td>
              <td align="center">{car.YearManufactured}</td>
              <td align="center">
                <Button
                 variant="outline-primary"
                  onClick={() => handleEdit(car)}
                >
                  <i class="bx bx-edit-alt"></i>
                </Button>

                <Button
                  variant="outline-danger"
                  onClick={() => {
                    handleDelete(car.Id);
                  }}
                >
                  <i class="bx bx-trash"></i>
                </Button>

                <Button
                  variant="outline-success"
                  onClick={() => handleCreateTravelApplication(car.Id)}
                >
                  <i class="bx bx-check"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CarsTable;
