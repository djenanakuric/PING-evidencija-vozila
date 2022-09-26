import {
  addTravelApplication,
  fetchTravelApplication,
  removeTravelApplication,
  editTravelApplication,
} from '../DataAccessLayer/travelApplication.js';

const getTravelApplications = async (req, res) => {
  try {
    console.log('dosao na kontroler');
    const travelApplication = await fetchTravelApplication();
    res.status(200).json(travelApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log('nije us+ao u kontroler');
  }
};

const createTravelApplication = async (req, res) => {
  try {
    console.log('dosao na kontroler');
    const newTravelApplicatin = await addTravelApplication(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log('nije usao u kontroler');
  }
};

const deleteTravelAplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removeTravelApplication(id, req.params);
    res
      .status(200)
      .json({ message: 'Travel application deleted successfully' });
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
  deleteTravelAplication,
  updateTravelApplication
};
