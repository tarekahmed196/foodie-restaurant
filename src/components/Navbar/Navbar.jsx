import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleMenu = () => {
      setIsExpanded((prev) => !prev);
    };
    return (
        <nav className="bg-cyan-800 text-white border-gray-200 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 ">
        <Link className="text-xl md:text-5xl flex items-center" href="" class="">
          <span className="text-red-500  font-bold">F</span>
          <span className="text-red-400  font-bold">OO</span>
          <span className="text-orange-400  font-bold">D</span>
          <span className="text-orange-300  font-bold">IE</span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isExpanded}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
      <ul style={{alignItems:"center", background:"rgb(21 94 117)"}} className=" text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-cyan-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
        </li>
        {/* <li>
          <Link to="/section-1" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Foods</Link>
        </li> */}

        <li>
          <a href="#section-1" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Foods</a>
        </li>
        
        <li>
          <Link to="/" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Booking</Link>
        </li>
        <li>
          <Link to="/services" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link to="" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
        

        
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;