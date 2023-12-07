import { useState } from 'react';
import { Card, Avatar } from 'flowbite-react';
import { useQuery } from 'react-query';
import axios from 'axios';

const FilterScreen = () => {
  const [cityFilter, setCityFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [specialityFilter, setSpecialityFilter] = useState('');

  const fetchSpecialists = async () => {
    try {
      const response = await axios.get('/api/specialists');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching specialists');
    }
  };

  const { data: specialists=[], isLoading, error } = useQuery('specialists', fetchSpecialists);
  console.log(specialists);
  if (error) {
    console.error('Error fetching specialists:', error);
  }

  return (
    <>
      <section className="p-40">
        <div className=" flex items-center justify-center py-4 md:py-8 flex-wrap gap-4">
            <input
                type="text"
                placeholder="Filter by city"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Filter by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Filter by Speciality"
                value={specialityFilter}
                onChange={(e) => setSpecialityFilter(e.target.value)}
            />
        </div>
        <div className="grid md:grid-cols-3 place-items-center gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            (specialists || []).map((specialist, i) => {
                console.log('City:', specialist.cityId);
                const cityMatches = cityFilter
                ? specialist.cityId && specialist.cityId.name
                  ? specialist.cityId.name.toLowerCase().includes(cityFilter.toLowerCase())
                  : false
                : true;

              const nameMatches = nameFilter
                ? specialist.firstName && specialist.firstName.toLowerCase().includes(nameFilter.toLowerCase())
                : true;

              const specialityMatches = specialityFilter
                ? specialist.specialityId && specialist.specialityId.name
                 ? specialist.specialityId.name.toLowerCase().includes(specialityFilter.toLowerCase())
                 : false
                : true ;

              if (!cityMatches || !nameMatches || !specialityMatches) {
                return null;
              }

              return (
                <div key={i}>
                  <Card className="card max-w-sm" key={i}>
                    <div className="flex flex-wrap gap-2 w-50 h-50">
                      <Avatar img="/logo.svg" rounded size="lg">
                        <div className="space-y-1 font-medium dark:text-white">
                          <div>{specialist.firstName}</div>
                          <div>{specialist.phone}</div>
                    
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                             {specialist.cityId ? specialist.cityId.name : 'City Name Not Available'}
                             </div>
                            
                        </div>
                      </Avatar>
                    </div>
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Cardiología - especialidad con más de 7 años de experiencia...
                      </h5>
                    </a>
                    <div className="mb-5 mt-2.5 flex items-center">
                        <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        5.0
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <a
                        href="#"
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                        Solicitar cita
                        </a>
                    </div>
                  </Card>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default FilterScreen;
