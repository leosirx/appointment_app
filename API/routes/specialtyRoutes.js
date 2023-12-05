import express from 'express';
import {
    createSpecialty,
    getAllSpecialties,
    getSpecialtyById,
    updateSpecialty,
    deleteSpecialty,
    getSpecialistsBySpecialty
} from '../controllers/specialtyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllSpecialties);
router.get('/', getSpecialtyById);
router.get('/:specialtyId/specialists', getSpecialistsBySpecialty);
router
    .route('/:id')
    .post(protect, createSpecialty)
    .put(protect, updateSpecialty)
    .delete(protect, deleteSpecialty);


//  Routes used for testing
// router.post('/', createSpecialty);
// router.get('/', getAllSpecialties);
// router.get('/:id', getSpecialtyById);
// router.put('/:id', updateSpecialty);
// router.delete('/:id', deleteSpecialty);
// router.get('/:specialtyId/specialists', getSpecialistsBySpecialty);

export default router; 