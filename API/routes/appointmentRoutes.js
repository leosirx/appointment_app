import express from 'express';
import {
  createAppointment,
  getAppointmentsBySpecialist,
  getAppointmentsByCustomer,
  getAppointmentDetails,
  updateAppointmentStatus,
  deleteAppointment,
} from '../controllers/appointmentController.js';
import { protect } from '../middleware/authMiddleware.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Apply rate limiting to all routes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  
router.use(limiter);

router.route('/').post(protect, createAppointment);

router
  .route('/specialist/:id')
  .get(protect, getAppointmentsBySpecialist);

router
  .route('/customer/:id')
  .get(protect, getAppointmentsByCustomer);

router
  .route('/:id')
  .get(protect, getAppointmentDetails)
  .put(protect, updateAppointmentStatus)
  .delete(protect, deleteAppointment);

export default router;
