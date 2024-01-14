import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
const Input = props => {
   const { search } = props;
   const [Location, setLocation] = useState('');

   const handlesubmit = e => {
      e.preventDefault();
      search(Location);
      setLocation('');
   };
   return (
      <div className=" w-1/2">
         <form onSubmit={handlesubmit}>
            <label
               htmlFor="search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
               Search
            </label>
            <div className="relative sm:text-2xl ">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-5" />
               </div>
               <input
                  type="search"
                  className="block font-semibold p-4  w-full  ps-16 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Location"
                  value={Location}
                  onChange={e => setLocation(e.target.value)}
               />
               <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Search
               </button>
            </div>
         </form>
      </div>
   );
};

export default Input;
