import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = ({ selectedSlot, selectedDate, onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [comments, setComments] = useState('');
  
  const navigate = useNavigate();
 
  const date = new Date(selectedDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // mes empieza en 0
  const day = date.getDate();
  const selectDate = `${year}-${month}-${day}`;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      console.error('No se ha seleccionado un horario');
      return;
    }

    if (!customerName.trim()) {
      console.error('Ingrese el nombre del cliente');
      return;
    }

    const userAuthenticated = true; // Reemplaza con tu lógica de verificación de autenticación

    if (!userAuthenticated) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      navigate.push('/login');
      return;
    }

    const formData = {
      customerName,
      comments,
      selectedSlot,
    };
    console.log(selectedSlot);
    try {
      const apiUrl = 'http://localhost:5000/api/appointments';
      const queryParams = new URLSearchParams({
        customerId: '65787dd13e6f9c65bbf204ca', // Replace with actual customer ID
        specialistId: '65787dc83e6f9c65bbf20464', // Replace with actual specialist ID
        availabilityId: '6578c8ffbf22ef4104a32c84', // Replace with actual availability ID
        startTime: `${selectDate}${selectedSlot.startTime}`,
        endTime: `${selectDate}${selectedSlot.endTime}`,
        status: 'pending',
      });

      const urlWithParams = `${apiUrl}?${queryParams.toString()}`;
      
      // Make a request to the server to save the appointment
      const response = await axios.post(decodeURIComponent(urlWithParams), formData);
      onSubmit(response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
      // Manejar errores según sea necesario
    }
  };

  return (
    <>
      <div className='ml-5 p-5 border rounded-lg border-gray-400'>
        <form onSubmit={handleSubmit} className='rounded-sm border-sky-400'>
          <h3 >Schedule appointment</h3>

          {/* Muestra la información del horario seleccionado */}
          <p className='mt-4'>Hours: {selectedSlot.displayTime}</p>

          {/* Campos del formulario */}
          
          <div>
            <label htmlFor="customerName" className="block mt-4 mb-2 text-sm font-medium dark:text-white">
              Name:
            </label>
            <input 
              type='text'
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
          </div>
          
          <div>
            <label htmlFor="comments" className="block mt-4 mb-2 text-sm font-medium dark:text-white">
              Comments:
            </label>
            <textarea 
              type='tex'
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
          </div>

          {/* Botón de envío del formulario */}
          <button 
            type="submit"
            className="rounded-lg mt-4 border text-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Programar Cita
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
