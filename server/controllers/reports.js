import { fetchReports } from '../DataAccessLayer/report.js';

const getReports = async (req, res) => {
  try {
    const dolazak = req.query.DatumPolaska;
    const polazak = req.query.DatumPovratka;
    console.log("Polazak", polazak)
    console.log("Dolazak", dolazak)
    const reports = await fetchReports(req.query.DatumPolaska, req.query.DatumPovratka, req.query.VoziloId);
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getReports };
