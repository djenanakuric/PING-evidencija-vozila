import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchTravelApplication = async () => {
  return await new Promise((resolve) => {
    connection.query(
      'SELECT pn.Id, pn.StartDate,' +
        'pn.EndDate, pn.StartPoint, pn.EndPoint,' +
        'pn.NumberOfPassengers, pn.Driver, pn.Status, CONCAT(c.CarModel," ", c.CarType) AS Car\n' +
        'FROM ping.Travel_Application as pn \n' +
        'inner join ping.Car as c on pn.CarId = c.Id',
      (error, result) => {
        if (error) console.error(error);
        resolve(result);
      }
    );
  });
};

const addTravelApplication = async (travelApplication) => {
  console.log(travelApplication);
  return await new Promise((resolve) => {
    connection.query(
      'INSERT INTO Travel_Application SET ?',
      travelApplication,
      (error, result) => {
        if (error) console.error(error);
        resolve(result);
      }
    );
  });
};

const editTravelApplication = async (id, data) => {
  console.log(data);
  return await new Promise((resolve) => {
    const { Status } = data;
    connection.query(
      'UPDATE travel_application' + ' SET Status = ? WHERE Id = ?',
      [Status, id],
      (error, result) => {
        if (error) console.error(error);
        resolve(result);
      }
    );
  });
};

export { fetchTravelApplication, addTravelApplication, editTravelApplication };
