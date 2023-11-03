import React from 'react'


const ContactForm = () => {
  return (
    <div className='pt-1 justify-center bg-black'>
     
      <div className='flex justify-center items-center'>
      <h1 className='text-4xl font-bold p-4 text-white'>CONTACT US:</h1>
      </div>
      <div className='flex justify-center items-center'>
      <p className='items-center text-white font-semibold'>Lets Help Make Your Travels Peaceful</p>
      </div>
      <div className='container p-4 justify-center flex items-center'>
      <form  className='container p-4 justify-center flex items-center'>
        <div>
          
        </div>
        <div className='items-center justify-center text-white font-semibold'>
              <input className='bg-gray-400 item-center border-black' type="text" placeholder="Name" />
        </div>
        <div>
              <input type="email" placeholder="Email Address" />
        </div>
        <div>
              <input type="text" placeholder="Mobile Number" />
        </div>
        <div>

       <select className='flex'>
        <option>TRAVEL VISA</option>
        <option>PASSPORT PROCESSING</option>
        <option>FLIGHT BOOKING</option>
       </select>
        </div>
        <div>

        <button className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' title="Takes Less Than 15 Minutes to reach our support team">START NOW</button>
        </div>
      </form>
     
      </div>
    </div>
  )
}

export default ContactForm
