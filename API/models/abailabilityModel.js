import mongoose from 'mongoose';

const availabilitySchema = mongoose.Schema(
  {
    specialistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Specialist',
      required: true,
    },
    dayOfWeek: {
      type: Number,
      required: true,
      // Puedes usar 0 para Domingo, 1 para Lunes, y así sucesivamente.
      min: 0,
      max: 6,
    },
    specificHours: [
      {
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Availability = mongoose.model('Availability', availabilitySchema);

export default Availability;
