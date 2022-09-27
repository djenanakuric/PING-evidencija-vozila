import {
  addTravelApplication,
  fetchTravelApplication,
  editTravelApplication,
  updateExpiredTravelApplication,
  checkIfTravelApplicationExist,
} from '../DataAccessLayer/travelApplication.js';

const getTravelApplications = async (req, res) => {
  try {
    await updateExpiredTravelApplication();
    const travelApplication = await fetchTravelApplication();
    res.status(200).json(travelApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getExistTravelApplications = async (req, res) => {
    try {
    const { CarId, StartDate, EndDate } = req.query;
    const response = await checkIfTravelApplicationExist(
      StartDate,
      EndDate,
      CarId
    );
    res.status(200).json({
       isExists: response[0].Count > 0,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createTravelApplication = async (req, res) => {
  try {
    await addTravelApplication(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTravelApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await editTravelApplication(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getTravelApplications,
  createTravelApplication,
  updateTravelApplication,
  getExistTravelApplications,
};
