import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchCars = async () => {
  return await new Promise((resolve) => {
    connection.query('SELECT * FROM Car', (error, result) => {
      if (error) throw new Error({ message: error.message });
      resolve(result);
    });
  });
};

const removeCar = async (id) => {
  return await new Promise((resolve) => {
    connection.query('DELETE FROM Car WHERE Id = ?', [id], (error, result) => {
      if (error) throw new Error({ message: error.message });
      resolve(result);
    });
  });
};

const addCar = async (car) => {
  return await new Promise((resolve) => {
    connection.query('INSERT INTO Car SET ?', car, (error, result) => {
      if (error) throw new Error({ message: error.message });
      resolve(result);
    });
  });
};

const editCar = async (id, car) => {
  const {
    CarModel,
    CarType,
    CarNumber,
    MotorNumber,
    MotorPowerUnit,
    YearManufactured,
    MotorPower,
    Flue,
  } = car;

  console.log('CAR', car);
  // return await new Promise((resolve) => {
  //   connection.query(
  //     'UPDATE Car ' +
  //       'SET CarModel = ?, CarType = ?, CarNumber = ?, MotorNumber = ?, MotorPowerUnit = ?, YearManufactured = ?, MotorPower = ?, Flue = ?' +
  //       'WHERE Id = ?',
  //     [
  //       CarModel,
  //       CarType,
  //       CarNumber,
  //       MotorNumber,
  //       MotorPowerUnit,
  //       YearManufactured,
  //       MotorPower,
  //       Flue,
  //       id,
  //     ],
  //     (error, result) => {
  //       if (error) throw new Error({ message: error.message });
  //       resolve(result);
  //     }
  //   );
  // });
};

export { fetchCars, removeCar, addCar, editCar };
