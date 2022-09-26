import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchTravelApplication = async () => {
  return await new Promise((resolve) => {
    connection.query(
      'SELECT pn.PutniNalogId, pn.DatumPolaska,' +
        'pn.DatumPovratka, pn.MjestoPolaska, pn.MjestoPovratka,' +
        'pn.BrojPutnika, pn.Vozac, pn.Akcija, CONCAT(v.Marka," ", v.tip) AS vozilo\n' +
        'FROM ping.putni_nalog as pn \n' +
        'inner join ping.vozilo as v on pn.VoziloId = v.VoziloId',
      (error, result) => {
        resolve(result);
      }
    );
  });
};

const addTravelApplication = async (travelApplication) => {
  console.log(travelApplication);
  return await new Promise((resolve) => {
    connection.query(
      'INSERT INTO putni_nalog SET ?',
      travelApplication,
      (error, result) => {
        console.log(error);
        console.log(result);
        return resolve(result);
      }
    );
  });
};

const removeTravelApplication = async (id) => {
  return await new Promise((resolve) => {
    connection.query(
      'DELETE FROM putni_nalog WHERE PutniNalogId = ?',
      [id],
      (error, result) => {
        console.log(error);
        console.log(result);
        return resolve(result);
      }
    );
  });
};

const editTravelApplication = async (id, akcija) => {
  return await new Promise((resolve) => {
    console.log(akcija, id);
    connection.query(
      'UPDATE putni_nalog' + ' SET Akcija = ? WHERE PutniNalogId = ?',
      [akcija, id],
      (error, result) => {
        console.log(error);
        console.log(result);
        return resolve(result);
      }
    );
  });
};

export {
  fetchTravelApplication,
  addTravelApplication,
  removeTravelApplication,
  editTravelApplication,
};
