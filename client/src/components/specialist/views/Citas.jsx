import "tailwindcss/tailwind.css";
import FilterScreen from "../../../screens/FilterScreen";

export default function Citas() {
  const { nameFilter, setNameFilter } = FilterScreen;

  return (
    <div>
      <div className="flex flex-col text-center py-16 mt-16 px-64">
        <div className="flex justify-evenly">
          <div className="flex items-center justify-between pb-6">
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-8 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className=" block pt-8 h-1 ps-10 py-8 text-center w-30 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Filter by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between pb-6">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-8 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className=" block pt-8 h-1 ps-10 py-8 text-center text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Filter by Date"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
          </div>
        </div>
        <table className="w-full ml-20">
          <thead className="text-xs text-gray-700 uppercase bg-green-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-20 py-4">
                Name
              </th>
              <th scope="col" className="px-4 py-4">
                Date
              </th>
              <th scope="col" className="px-4 py-4">
                Hour
              </th>
              <th scope="col" className="px-4 py-4">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Shamela Chadee
              </th>
              <td className="px-4 py-4">20/12/2023</td>
              <td className="px-4 py-4">9:00</td>
              <td className="px-4 py-4">Mendoza</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Estefania Chadee
              </th>
              <td className="px-4 py-4">26/12/2023</td>
              <td className="px-4 py-4">10:00</td>
              <td className="px-4 py-4">Buenos Aires</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maria Perez
              </th>
              <td className="px-4 py-4">26/12/2023</td>
              <td className="px-4 py-4">3:00</td>
              <td className="px-4 py-4">Mendoza</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Carolina Carvajal
              </th>
              <td className="px-4 py-4">10/01/2024</td>
              <td className="px-4 py-4">10:00</td>
              <td className="px-4 py-4">Catamarca</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
