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

const checkIfTravelApplicationExist = async (StartDate, EndDate, CarId) => {
  return await new Promise((resolve) => {
    connection.query(
      'SELECT COUNT (*) as Count \n' +
        'FROM Travel_Application ta \n' +
        'WHERE ta.CarId = ? AND ((ta.StartDate BETWEEN ? AND ? ) OR (ta.EndDate BETWEEN ? AND ? ) \n' +
        'or (? BETWEEN ta.StartDate AND ta.EndDate) OR (? BETWEEN ta.StartDate AND ta.EndDate)) \n' +
        'AND ta.Status not in ("Završen","Odbijen", "Automatski završen")',
      [CarId, StartDate, EndDate, StartDate, EndDate, StartDate, EndDate],
      (error, result) => {
        if (error) console.error(error);
        resolve(result);
      }
    );
  });
};

const addTravelApplication = async (travelApplication) => {
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

const updateExpiredTravelApplication = async () => {
  return await new Promise((resolve) => {
    connection.query(
      'UPDATE travel_application ' +
        'SET Status = "Automatski završen" ' +
        'WHERE Status NOT IN ("Odbijen", "Završen") AND EndDate <= CURRENT_TIMESTAMP()',
      (error, result) => {
        if (error) console.error(error);
        resolve(result);
      }
    );
  });
};

export {
  fetchTravelApplication,
  addTravelApplication,
  editTravelApplication,
  updateExpiredTravelApplication,
  checkIfTravelApplicationExist,
};
