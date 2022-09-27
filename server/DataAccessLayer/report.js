import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchReports = async (StartDate, EndDate, CarId) => {
  let query =
    "SELECT pn.StartDate, pn.EndDate, pn.Status, CONCAT(c.CarModel,' ',c.CarType) AS Car " +
    "FROM Travel_Application AS pn INNER JOIN Car AS c ON pn.CarId = c.Id " +
    "WHERE pn.StartDate >= ?  AND pn.EndDate <= ? ";
  query += !CarId ? ';': ` AND pn.CarId = ${CarId}`;

  return await new Promise((resolve) => {
    connection.query(query, [StartDate, EndDate], (error, result) => {
      if (error) throw error;
      resolve(result);
    });
  });
};

export { fetchReports };
