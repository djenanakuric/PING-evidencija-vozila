import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchCars = async () => {
  return await new Promise((resolve) => {
    connection.query('SELECT * FROM Vozilo', (error, result) => {
      resolve(result);
    });
  });
};

const removeCar = async (id) => {
  return await new Promise((resolve) => {
    connection.query(
      'DELETE FROM Vozilo WHERE VoziloId = ?',
      [id],
      (error, result) => {
        console.log(error);
        console.log(result);
        resolve(result);
      }
    );
  });
};

const addCar = async (car) => {
  return await new Promise((resolve) => {
    connection.query('INSERT INTO vozilo SET ?', car, (error, result) => {
      console.log(error);
      console.log(result);
      return resolve(result);
    });
  });
};

const editCar = async (id, car) => {
  const {
    Marka,
    Tip,
    BrojSasije,
    BrojMotora,
    GodinaProizvodnje,
    SnagaMotora,
    VrstaGoriva,
  } = car;
  console.log('car', car);
  return await new Promise((resolve) => {
    connection.query(
      'UPDATE VOZILO ' +
        'SET Marka = ?, Tip = ?, BrojSasije = ?, BrojMotora = ?, GodinaProizvodnje = ?, SnagaMotora = ?, VrstaGoriva = ?' +
        'WHERE VoziloId = ?',
      [
        Marka,
        Tip,
        BrojSasije,
        BrojMotora,
        GodinaProizvodnje,
        SnagaMotora,
        VrstaGoriva,
        id,
      ],
      (error, result) => {
        console.log(error);
        console.log(result);
        return resolve(result);
      }
    );
  });
};

export { fetchCars, removeCar, addCar, editCar };
