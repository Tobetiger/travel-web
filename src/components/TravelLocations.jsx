import React from 'react'
import { data } from '../data/data.js';

const TravelLocations = () => {
  return (
    <div className='max-w-[1640px] m-auto px-2 pt-2'>
      <h1 className='font-bold text-center text-amber-600'>Top Rated Travel Services</h1>
      
{/* Filter Row */}

      <div>
{/* Filter Type */}
<p>Filter Type</p>
<div>
<button> All </button>
<button> Travel VISA </button>
<button> Travel Passport </button>
<button> Flight Booking </button>


</div>
      </div>
    </div>
  )
}

export default TravelLocations
