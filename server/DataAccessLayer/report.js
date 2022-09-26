import { getConnection } from '../db/db.js';

const connection = getConnection();

const fetchReports = async (datumPolaska, datumDolaska, voziloId) => {
  let query =
    "SELECT pn.DatumPolaska, pn.DatumPovratka, CONCAT(v.Marka,' ',v.tip) AS vozilo " +
    'FROM putni_nalog AS pn INNER JOIN ping.vozilo AS v ON pn.VoziloId = v.VoziloId ' +
    'WHERE pn.DatumPolaska >= ?  AND pn.DatumPovratka <= ?';
  query += voziloId != null ? ` AND pn.VoziloId = ${voziloId}` : ';';

  return await new Promise((resolve) => {
    connection.query(query, [datumPolaska, datumDolaska], (error, result) => {
      console.log('#dosaoda');
      console.log(error);
      console.log(result);
      resolve(result);
    });
  });
};

export { fetchReports };
