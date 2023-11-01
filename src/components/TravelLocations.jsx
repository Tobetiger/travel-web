import React, { useState } from 'react'
import { categories, data } from '../data/data.js';

const TravelLocations = () => {

const [countries, setCountries] = useState(data)
const [testi, setTesti] = useState(categories)


const filterType = (category) => {
  setCountries(
    data.filter((item) => {
return item.category === category;
  }));
};


  return (
    <div className='max-w-[1640px] m-auto px-2 pt-2'>
      <h1 className='text-4xl font-bold text-center text-black'>Top Rated Travel Services</h1>
      
{/* Filter Row */}

      <div className='max-w-[1640px] m-auto px-2'>
<p className='px-2 pt-2 font-semibold'>Filter Type:</p>
<div className='px-2 pt-2 justify-between flex-wrap'>
<button onClick={()=> setCountries(data)} className='m-1 border-amber-600 text-black hover:bg-amber-300 hover:border-red-400'>All</button>
<button onClick={()=> filterType('visa')} className='m-1 border-amber-600 text-black hover:bg-amber-300'> Travel VISA </button>
<button onClick={()=> filterType('passport')} className='m-1 border-amber-600 text-black hover:bg-amber-300'> Travel Passport </button>
<button onClick={()=> filterType('flights')} className='m-1 border-amber-600 text-black hover:bg-amber-300'> Flight Booking </button>
</div>      
</div>

{/* Display Couuntries */}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 p-3'>
{countries.map((item, index)=> (
  <div key={index} className='border shadow-lg hover:scale-105 duration-300 '>
    <img src={item.image} alt={item.name}
    className='w-full h-[200px] object-cover rounded-t-lg'
    />
    <div>
    <p className='flex justify-between font-semibold px-4 py-4'>
      {item.name}
    </p>
    </div>
  </div>
))}
</div>


{/* Display Testimonials */}
<div>
  <div className='p-4 px-4 py-4 justify-between text-center'>
  <h1 className='text-4xl text-center font-bold pt-4'>TESTIMONIALS</h1>
  <p className='font-bold px-4 py-4 justify-between'>Quick Words  From Our Clients</p>
  </div>
<div className='grid grid-col-2 lg:grid-cols-4 gap-6 pt-4 p-3'>
{testi.map((item, index)=> (
  <div key={index} className='border shadow-lg hover:scale-105 duration-300 '>
    <img src={item.image} alt={item.name}
    className='w-full h-[200px] object-cover rounded-t-lg'
    />
    <div>
    <p className='flex justify-between font-semibold px-4 py-4'>
      {item.name}
    </p>
    </div>
  </div>
))}
</div>

</div>
</div>
  );
};

export default TravelLocations
