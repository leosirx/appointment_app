import mongoose from 'mongoose';

const citySchema =  mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  specialistId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Specialist',
    },
  ],
  
});

const City = mongoose.model('City', citySchema);

export default City;
