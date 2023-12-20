import express from "express";
import {
  getAllCity,
  registerCity,
  getOneCity,
  updateCity,
  removeCity,
} from "../controllers/cityController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
    .route("/")
    .get(getAllCity)
    .post(registerCity);
router
<<<<<<< HEAD
  .route('/:id')
=======
  .route('/id')
>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
  .get(protect, getOneCity)
  .put(protect, updateCity)
  .delete(protect, removeCity);

export default router; 