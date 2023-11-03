import React from 'react'

const HeadlineCards = () => {
  return (
    
    <div id="headlineCards" className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
     
{/* Box */}
<div className='rounded-2xl bg-black/40 relative hover:scale-105 duration-300 shadow-lg hover:shadow-red-400'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <h1 className='pl-4 font-semibold text-2xl px-2 pt-2'>Travel <span className='font-semibold'>VISA</span></h1>
          <p className='pl-4 px-2 font-sherif'><span>CANADA, USA, UK and DUBAI</span></p>
          
          <div className='p-1 mr-4'>
          <button className='hover:scale-95 bg-white hover:bg-red-500 hover:shadow-lg hover:text-white text-black mx-2 bottom-4 font-semibold' title="let's Help You Get Your VISA" >BOOK A CALL</button>
          </div>
          </div>
          <div className='hover:scale-105 duration-300'>
          <img className='max-h-[160px] md:max-h-[1640px] w-full object-cover rounded-xl'  src="https://images.unsplash.com/photo-1521899148182-53d4f3becdbd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        </div>

</div>
{/* Box */}
<div className='rounded-2xl bg-black/40 relative hover:scale-105 duration-300 shadow-lg hover:shadow-red-400'>
        {/* Overlay */}
        <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <h1 className='pl-4 font-semibold text-2xl px-2 pt-2'>International <span className='font-semibold'>PASSPORT</span></h1>
          <p className='pl-4 px-2 font-sherif'><span>Nigeria, Mauritus</span></p>
          <div className='p-1 mr-4'>
          <button className='hover:scale-95 bg-white hover:bg-red-500 hover:shadow-lg hover:text-white text-black mx-2 bottom-4 font-semibold' title="let's Help You Get Your PASSPORT" >BOOK A CALL</button>
          </div>
          </div>
          <div className=''>
          <img className='max-h-[160px] md:max-h-[1640px] w-full object-cover rounded-xl'  src="https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        </div>

</div>
{/* Box */}
<div className='rounded-2xl bg-black/40 relative hover:scale-105 duration-300 shadow-lg hover:shadow-red-400'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <h1 className='pl-4 font-semibold text-2xl px-2 pt-2'>Flight<span className=' pl-2 font-semibold'>BOOKING</span></h1>
          <p className='pl-4 px-2 font-sherif'>All States In NIGERIA, CANADA, USA,</p>
          <p className='pl-4 px-2 font-sherif'><span> UK AND DUBAI </span></p>
          <div className='p-1 mr-4'>
          <button className='hover:scale-95 bg-white hover:bg-red-500 hover:shadow-lg hover:text-white mx-2 bottom-4 font-semibold text-black' title="let's Help You Book Your Flights">BOOK A CALL</button>
          </div>
          </div>
                    <img className='max-h-[160px] md:max-h-[1640px] w-full object-cover rounded- hover:touch-pinch-zoom'  src="https://images.pexels.com/photos/12717357/pexels-photo-12717357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>


      </div>
  
  );
}

export default HeadlineCards
