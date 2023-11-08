import React from 'react'

const Hero = () => {
  const openExternalLink = () =>{
    const externalLink = 'https://wa.link/a4bv4a';
    window.open(externalLink, '_blank');
    }
  

  return (
    <div id="hero" className='max-w-[1640px] mx-auto p-1'>
      
<div className='max-h-[1640px] relative'>

{/* Overlay */}
<div className='absolute w-full h-full text-gray-100 max-h-[500px] bg-black/40 flex flex-col justify-center pt-4'>
  <h1 className='px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold' >Your <span className='text-red-500'> Personal</span></h1>
  <h1 className='px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold text-red-500'>Travel <span className='text-gray-100'>Assistant</span></h1>
  <h4 className='px-4 text-1xl sm:2xl md:3xl lg:4xl font-semibold'><span>VISA, PASSPORT, FLIGHT TICKETS...</span></h4>
  <div className='p-4'>
  <button className='bg-transparent border-red-600 shadow-lg shadow-gray-700 hover:shadow-black hover:bg-red-500 mx-2 bottom-4 font-semibold hidden md:flex text-white hover:scale-95' title="let's Help You Get Your VISA" onClick={openExternalLink}>BOOK A CALL</button>
  </div>
 
</div>
<img className='w-full max-h[500px] object-cover ' src="https://images.pexels.com/photos/210199/pexels-photo-210199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" > 

</img>

</div>

    </div>
  );
}

export default Hero
