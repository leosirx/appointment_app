import asyncHandler from 'express-async-handler';
import Availability from '../models/abailabilityModel.js';

// @desc    Crear una nueva disponibilidad
// @route   POST /api/availability
// @access  Private
const createAvailability = asyncHandler(async (req, res) => {
  const { specialistId, dayOfWeek, specificHours } = req.body;

  const availability = await Availability.create({
    specialistId,
    dayOfWeek,
    specificHours,
  });

  if (availability) {
    res.status(201).json(availability);
  } else {
    res.status(400);
    throw new Error('Invalid availability data');
  }
});

// @desc    Obtener todas las disponibilidades de un especialista
// @route   GET /api/availability/specialist/:id
// @access  Private
const getAvailabilitiesBySpecialist = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const availabilities = await Availability.find({ specialistId: id }).populate('specialistId');

  if (availabilities) {
    res.json(availabilities);
  } else {
    res.status(404);
    throw new Error('No availabilities found for the specialist');
  }
});

// @desc    Eliminar una disponibilidad
// @route   DELETE /api/availability/:id
// @access  Private
const deleteAvailability = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const availability = await Availability.findById(id);

  if (availability) {
    await availability.remove();
    res.json({ message: 'Availability removed' });
  } else {
    res.status(404);
    throw new Error('Availability not found');
  }
});

export { createAvailability, getAvailabilitiesBySpecialist, deleteAvailability };
