// Hero.js

import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.trim();

    if (searchTerm !== '') {
      navigate(`/filter?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <main>
        <div className="mt-20 py-24 px-6 text-center bg-white dark:bg-black ">
          <h1 className="text-slate-500 dark:text-white mt-2 mb-14 p-8 text-5xl  tracking-tight md:text-5xl xl:text-5xl s:text-4xl">
            Cuida tu salud y busca un <br />especialista 👩‍⚕️
          </h1>
          <div className="w-96 mx-auto">
            <form onSubmit={handleSearch}>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Optometer, Cardiology..." name="search" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
