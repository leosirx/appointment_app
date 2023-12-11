import mongoose from 'mongoose';
import faker from 'faker';
import Specialist from '../models/specialistModel.js';
import City from '../models/cityModel.js';
import Speciality from '../models/specialtyModel.js';

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/appointmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Datos ficticios
const cities = ['City A', 'City B', 'City C'];
const specialities = ['Cardiology', 'Dermatology', 'Ophthalmology'];

// Función para generar datos ficticios
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Función para llenar la base de datos
const populateDatabase = async () => {
  try {
    // Crear ciudades
    const createdCities = await City.create(cities.map(name => ({ name })));

    // Crear especialidades
    const createdSpecialities = await Speciality.create(specialities.map(name => ({ name })));

    // Crear especialistas
    const specialistsData = Array.from({ length: 50 }, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: 'password123',
      phone: '123456789',
      cityId: getRandomElement(createdCities)._id,
      specialityId: getRandomElement(createdSpecialities)._id,
    }));

    await Specialist.create(specialistsData);

    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Cerrar la conexión a la base de datos
    mongoose.connection.close();
  }
};

// Ejecutar la función de población
populateDatabase();
