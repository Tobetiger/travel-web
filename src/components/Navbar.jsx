import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { AiFillMessage, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { LiaPassportSolid } from 'react-icons/lia';
import { GrVisa } from 'react-icons/gr';
import { RiFlightTakeoffFill } from 'react-icons/ri';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { IoMdContact } from 'react-icons/io';



const Navbar = () => {
  

  const [nav, setNav] = useState(false)


  return (
    /* Navbar Section (left side) */
    <div className='bg-red-100 max-w-[1640px] mx-auto flex justify-between item-center p-4'
    >
      {/* Left Menu Bar */}
      <div className='flex item-center'>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer p-2'
      
      >
      <AiOutlineMenu size={30} className='hover:scale-105' />
      </div>
    <h1 className='text-2xl sm:text-3xl lg:text-2xl px-2 pt-1'>
    Trans<span className='font-bold text-red-600 border-black'>Emerald</span>Travels</h1>

      </div>

   
    {/*Navbar Section (search Input)*/}
   {/* <div className='bg-gray-200 rounded-full md:flex item-center px-1 w-[200px] sm:w-[300px] lg:w-[500px] hidden'>
      <div className='p-3'>
      <AiOutlineSearch size={20} />
      </div>
      
      <input className='bg-transparent p-2 focus:outline-none w-200'  type="text" placeholder='Search Destination'>
      </input>

    </div> */}
    <div>
    <button className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-700 shadow-lg shadow-red-400/50 dark:shadow-lg dark:shadow-red-700/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:flex items-center'> 
       <GrMail size={20} className='mr-2'/>  CONTACT US
      </button>

    


    {/* Mobile Menu */}
    {/* Overlay for menu */}
   {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=> setNav(!nav)} ></div> : '' }
  </div>
  
  { /* Side drawer for menu */ }
<div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>


<AiOutlineClose 
onClick={()=> setNav(!nav)}
size={25} className='hover:scale-105 hover:border-gray-300 hover:border-rounded absolute right-4 top-4 cursor-pointer duration-300'/>

<h2 className='text-2xl p-4'>
  Trans-<span className='font-bold text-red-500'>Emerald</span>
</h2>
<nav>
  <ul className='flex flex-col p-4 text-gray-800'>
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><GrVisa size={20} className='mr-4' /> Travel VISA</li>
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><LiaPassportSolid size={20} className='mr-4' /> Passport</li>
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><RiFlightTakeoffFill size={20} className='mr-4'/> Flight Bookings</li>
  <hr />
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><AiFillMessage size={20} className='mr-4' />  Contact Us</li>
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><IoMdContact size={20} className='mr-4' />About Us</li>
  <li className='hover:bg-red-100 text-md px-4 py-4 flex'><BiSolidHelpCircle size={20} className='mr-4' /> Faqs</li>
  </ul>
</nav>
    </div>
    
    </div>
    
  )
}

export default Navbar
