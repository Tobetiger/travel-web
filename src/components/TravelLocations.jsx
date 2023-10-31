import React, { useState } from 'react'
import { data } from '../data/data.js';

const TravelLocations = () => {

const [countries, setCountries] = useState(data)

  return (
    <div className='max-w-[1640px] m-auto px-2 pt-2'>
      <h1 className='text-4xl font-bold text-center text-black'>Top Rated Travel Services</h1>
      
{/* Filter Row */}

      <div className='max-w-[1640px] m-auto px-2'>
<p className='px-2 pt-2 font-semibold'>Filter Type:</p>
<div className='px-2 pt-2 justify-between flex-wrap'>
<button className='m-1 border-amber-600 text-black hover:bg-amber-300 hover:border-red-400'> Travel VISA </button>
<button className='m-1 border-amber-600 text-black hover:bg-amber-300'> Travel VISA </button>
<button className='m-1 border-amber-600 text-black hover:bg-amber-300'> Travel Passport </button>
<button className='m-1 border-amber-600 text-black hover:bg-amber-300'> Flight Booking </button>
</div>      
</div>

{/* Display Couuntries */}
<div className='grid grid-col-2 lg:grid-cols-4 gap-6 pt-4 p-3'>
{countries.map((item, index)=> (
  <div key={index} className='border shadow-lg hover:scale-105 duration-300 '>
    <img src={item.image} alt={item.name}/>
  </div>
))}
</div>

</div>
  );
};

export default TravelLocations
