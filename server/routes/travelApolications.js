import { Router } from "express";
import {getTravelApplications, createTravelApplication, updateTravelApplication,  getExistTravelApplications} from '../controllers/travelApplications.js';

const router = Router();

router.get("/", getTravelApplications);
router.post("/", createTravelApplication);
router.patch("/:id", updateTravelApplication);
router.get("/checkIfTravelApplicationExist", getExistTravelApplications);


export default router;