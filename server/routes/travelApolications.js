import { Router } from "express";
import {getTravelApplications, createTravelApplication, updateTravelApplication} from '../controllers/travelApplications.js';

const router = Router();

router.get("/", getTravelApplications);
router.post("/", createTravelApplication);
router.patch("/:id", updateTravelApplication);


export default router;