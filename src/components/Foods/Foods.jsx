import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Foods = () => {
  const filterByItem=(type)=>{
    
  }
    const [items, setItems] = useState([]);
    const [type, setType]= useState('all');
useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await axios.get('db.json');
      console.log(response);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getProducts();
}, []); 

/* useEffect(()=>{
  fetch('../../public/db.json')
  .then(res=> res.json)
  .then(data => setItems(data))
},[]) */

console.log(items);
    return (
      
        <>
        
<nav id='section-1' className="bg-white dark:bg-gray-900 w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600 mt-32">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <div className="flex md:order-2">
      
      
  </div>
  <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <button>
        <li onClick={() =>setType('all')} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">All</li>
      </button>
      <li>
        <button  onClick={() =>setType('burger')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Burger</button>
      </li>
      <li>
        <button  onClick={() =>setType('pizza')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pizza</button>
      </li>
      <li>
        <button  onClick={() =>setType('chicken')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chicken</button>
      </li>
    </ul>
  </div>
  </div>
</nav>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 mt-6">
          {items && items.length > 0 && items.map((item) => (
  (type === 'all' || type === item?.item) && (
    <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
      <img src={item?.picture} alt={item?.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item?.name}</h3>
        <p className="text-gray-600">{item?.about}</p>
        <p className="text-green-600 font-semibold">${item?.price}</p>
      </div>
    </div>
  )
))}


          </div>
        </>

    );
};

export default Foods;