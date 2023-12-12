import { Button } from "@material-tailwind/react";

export default function Search() {
 /* import { axiosInstance } from "../../api/axiosInstance";
  export const getAllProducts = async (categories, title) => {
    try {
      const params = {
        title,
        categoryId: categories,
      };
  
      const res = await axiosInstance.get("products/", {
        params,
      });
  
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const res = await axiosInstance.get("categories"); */

//const res = await axios.put('${apiUrl}/api/specialty/', params);

/* const apiUrl = 'https://api.example.com/';
const res = await axios.get('${apiUrl}/categories'); 
const res = await axios.get('${apiUrl}/api/specialty'); */

  return (
    <div className="flex items-center">
    <htmlForm className="flex items-center pr-8">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cliente"
          required
        />
      </div>
      <Button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </Button>
    </htmlForm>

    <htmlForm className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Fecha"
          required
        />
      </div>
      <Button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </Button>
    </htmlForm>
    </div>
  );
}
