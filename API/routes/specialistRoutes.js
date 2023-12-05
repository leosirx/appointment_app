import express from 'express';
import {
  getAllSpecialist,
  authSpecialist,
  registerSpecialist,
  logoutSpecialist,
  getSpecialistProfile,
  updateSpecialistProfile,
  removeSpecialist
} from '../controllers/specialistController.js';
import { protect } from '../middleware/authMiddleware.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Apply rate limiting to all routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.use(limiter);

router
  .route('/')
  .get(getAllSpecialist)
  .post(registerSpecialist)

router.post('/auth', authSpecialist);
router.post('/logout', logoutSpecialist);
router
  .route('/profile')
  .get(protect, getSpecialistProfile)
  .put(protect, updateSpecialistProfile)
  .delete(protect, removeSpecialist)

export default router;