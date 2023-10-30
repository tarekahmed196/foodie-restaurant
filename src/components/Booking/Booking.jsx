import React, { useState } from 'react';



const Booking = () => {
    const Counter=()=>{
        const [count, setCount]= useState(1);
        const countIncrease= ()=>{
          setCount(count +1);
        }
        
        return(
          <div className='max-w-7xl mx-auto'> <br />
            <h1>How many people:{count}</h1>
            {/* <button className='rounded-full bg-dark-400' onClick={countIncrease}>Increase</button> */}
            
            <button onClick={countIncrease} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">Add People</button><br />

            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Make a Reservation</button>
          </div>
        )
      }
    return (
        <>
            
            <h1 className='max-w-7xl mx-auto text-center font-black text-3xl'>This is the <span className='text-yellow-700'>Booking Page</span></h1>
           
            
            
<form className='max-w-7xl mx-auto mt-16'>
    

<label htmlFor="">Select Date</label><br />
<input type="date" name="" id="" />








  
</form>
<Counter/>

        </>
    );
};

export default Booking;