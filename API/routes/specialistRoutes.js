import express from 'express';
import {
<<<<<<< HEAD
  getAllSpecialist,
  getOneSpecialist,
=======
>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
  authSpecialist,
  registerSpecialist,
  logoutSpecialist,
  getSpecialistProfile,
  updateSpecialistProfile,
  removeSpecialist
} from '../controllers/specialistController.js';
import { protect } from '../middleware/authMiddleware.js';
import rateLimit from 'express-rate-limit';
<<<<<<< HEAD
import Specialist from '../models/specialistModel.js';

const router = express.Router();

// Defines a route handler for a GET request to the root URL ("/") and populates the "cityId" field for each specialist
router.get('/', async (req, res) => {
  try {
    const specialists = await Specialist.find()
    .populate('cityId')
    .populate('specialtyId') ;
    if (!specialists) {
      res.status(404).json({ message: 'No specialists found' });
      return;
    }
    res.json(specialists);
  } catch (error) {
    console.error('Error fetching specialists:', error);
    res.status(500).json({ error: 'Error fetching specialists' });
  }
});

=======

const router = express.Router();

>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
// Apply rate limiting to all routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.use(limiter);

<<<<<<< HEAD
router
  .route('/')
  .get(getAllSpecialist)
  .post(registerSpecialist)

=======
router.post('/', registerSpecialist);
>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
router.post('/auth', authSpecialist);
router.post('/logout', logoutSpecialist);
router
  .route('/profile')
  .get(protect, getSpecialistProfile)
  .put(protect, updateSpecialistProfile)
  .delete(protect, removeSpecialist)

<<<<<<< HEAD
router
  .route('/id')
  .get(protect, getOneSpecialist)

=======
>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
export default router;