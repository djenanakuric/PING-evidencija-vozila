import { Router } from "express";
import {getTravelApplications, createTravelApplication, deleteTravelAplication, updateTravelApplication} from '../controllers/travelApplications.js';

const router = Router();

router.get("/", getTravelApplications);
router.post("/", createTravelApplication);
router.delete("/:id", deleteTravelAplication);
router.patch("/:id", updateTravelApplication);


export default router;