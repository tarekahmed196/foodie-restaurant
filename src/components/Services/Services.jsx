import React, { useState } from "react";

const Services = () => {
    // Order Adding and Minimizing counter 
  const Counter = () => {
    const [count, setCount] = useState(0);
    const countIncrease = () => {
      setCount(count + 1);
    };

    const countDecrease = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <div className="max-w-7xl mx-auto">
        {" "}
        <br />
        <h1>Total special Orders: {count}</h1>
        
        <button
          onClick={countDecrease}
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
        >
          Minimize Item
        </button>
        <button
          onClick={countIncrease}
          type="button"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
        >
          Add Item
        </button>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Make a Reservation
        </button>
      </div>
    );
  };
  return (
    <section id="services" className="bg-white py-12">
      <div className="max-w-7xl mx-auto py-4 sm:px-0 lg:px-0">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="text-5xl text-center font-bold text-gray-700"
        >
          Our Special{" "}
          <span className="text-orange-400 mt-16 mb-6">Services</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Menu Item 1 */}
          <div
        //   Using animation 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <img
              className="w-full h-64 object-cover"
              src="/burger2.jpg"
              alt="Menu Item 1"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Special Dish 1
              </h3>
              <p className="mt-4 text-gray-500">
                A delicious and exquisite dish prepared by our expert chefs.
              </p>
              <p className="mt-4 text-gray-900">Price: $19.99</p>
            </div>
          </div>

          {/* Menu Item 2 */}
          <div
        //   using animation 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <img
              className="w-full h-64 object-cover"
              src="/pizza2.jpg"
              alt="Menu Item 2"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Special Dish 2
              </h3>
              <p className="mt-4 text-gray-500">
                A delightful and savory dish that will leave you craving for
                more.
              </p>
              <p className="mt-4 text-gray-900">Price: $24.99</p>
            </div>
          </div>
        </div>
      </div>
      <Counter />
    </section>
  );
};

export default Services;
