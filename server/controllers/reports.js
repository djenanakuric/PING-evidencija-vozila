import { fetchReports } from '../DataAccessLayer/report.js';

const getReports = async (req, res) => {
  try {
    const {StartDate, EndDate, CarId} = req.query;
    const reports = await fetchReports(StartDate, EndDate, CarId);
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getReports };
