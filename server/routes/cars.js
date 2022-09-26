import { Router } from "express";
import { getCars, createCar, updateCar, deleteCar} from "../controllers/cars.js";

const router = Router();

router.get("/", getCars);
router.post("/", createCar);
router.patch("/:id", updateCar);
router.delete("/:id", deleteCar)

export default router;