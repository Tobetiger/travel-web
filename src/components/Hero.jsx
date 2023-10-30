import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      
<div className='max-h-[500px] relative'>

{/* Overlay */}
<div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
  <h1 className='px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold' >Your <span className='text-amber-500'> Personal</span></h1>
  <h1 className='px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold text-amber-500'>Travel <span className='text-gray-200'>Assistant</span></h1>
  <h4 className='px-4 text-1xl sm:2xl md:3xl lg:4xl font-semibold'><span>VISA, PASSPORT, FLIGHT TICKETS...</span></h4>
</div>
<img className='w-full max-h[500px] object-cover ' src="https://images.pexels.com/photos/210199/pexels-photo-210199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="travel-topia" > 

</img>

</div>

    </div>
  );
}

export default Hero
