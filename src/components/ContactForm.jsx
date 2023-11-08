import React from 'react'


const ContactForm = () => {
  return (
    <div id="contact" className='p-4 pt-1 justify-center bg-black pb-20'>
     
      <div className='flex justify-center items-center'>
      <h1 className='text-2xl underline gap-4 font-bold p-4 text-white pt-8 pb-8'>Contact Trans Emerald Travels:</h1>
      </div>
      <div className='flex justify-center items-center'>
      <p className='items-center text-white  font-thin'><span className='text-red-400' >Address-1:</span> PLot 502 Dalaba St, Wuse 5, 9 28 Brass Aba, Abia State. </p>
      </div>
      <div className='flex justify-center items-center'>
      <p className='items-center text-white font-thin'><span className='text-red-400'>Address-2:</span> Abuja, Nigeria 502 Dalapa Street, Wuse Zone 5, Abuja. </p>
      </div>
      
    </div>
  )
}

export default ContactForm
