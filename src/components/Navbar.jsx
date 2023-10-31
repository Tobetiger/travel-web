import React, {useState} from 'react';
import { AiFillMessage, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineFlightTakeoff } from 'react-icons/md';
import { LiaPassportSolid } from 'react-icons/lia';
import { GrVisa } from 'react-icons/gr';
import { RiFlightTakeoffFill } from 'react-icons/ri';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { IoMdContact } from 'react-icons/io';



const Navbar = () => {

  const [nav, setNav] = useState(false)


  return (
    /* Navbar Section (left side) */
    <div className=' max-w-[1640px] mx-auto flex justify-between item-center p-4'
    >
      {/* Left Menu Bar */}
      <div className='flex item-center'>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer p-2'
      
      >
      <AiOutlineMenu size={30} className='hover:scale-105' />
      </div>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
      Travel<span className='font-bold'>Topia</span>
    </h1>
    <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]'>
      <p className='bg-gray-900 rounded-full p-2 text-white'>Home-Page</p> 
      <p className='p-2 '>Affiliate</p>
    </div>

      </div>

    {/*Navbar Section (search Input)*/}
    <div className='bg-gray-200 rounded-full flex item-center px-1 w-[200px] sm:w-[400px] lg:w-[500px] '>
      <div className='p-3'>
      <AiOutlineSearch size={25} />
      </div>
      
      <input className='bg-transparent p-2 focus:outline-none w-full'  type="text" placeholder='Search Travel Location'>
      </input>

    </div>
    <div>
    <button className='bg-black hover:bg-gray-800 border-red-600 text-white rounded-full hidden md:flex items-center py-2'> 
       <MdOutlineFlightTakeoff size={20} className='mr-2'/>  Bookings
      </button>

    


    {/* Mobile Menu */}
    {/* Overlay for menu */}
   {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }
  </div>
  
  { /* Side drawer for menu */ }
<div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>


<AiOutlineClose 
onClick={()=> setNav(!nav)}
size={25} className='hover:scale-105 absolute right-4 top-4 cursor-pointer duration-300'/>

<h2 className='text-2xl p-4'>
  Travel<span className='font-bold'>Topia</span>
</h2>
<nav>
  <ul className='flex flex-col p-4 text-gray-800'>
  <li className='hover:bg-slate-100 text-md py-4 flex'><GrVisa size={20} className='mr-4' />VISA Booking</li>
  <li className='hover:bg-slate-100 text-md py-4 flex'><LiaPassportSolid size={20} className='mr-4' /> Passport Booking</li>
  <li className='hover:bg-slate-100 text-md py-4 flex'><RiFlightTakeoffFill size={20} className='mr-4'/>Flight Bookings</li>
  <hr />
  <li className='hover:bg-slate-100 text-md py-4 flex'><AiFillMessage size={20} className='mr-4' />  Contact Us</li>
  <li className='hover:bg-slate-100 text-md py-4 flex'><IoMdContact size={20} className='mr-4' />About Us</li>
  <li className='hover:bg-slate-100 text-md py-4 flex'><BiSolidHelpCircle size={20} className='mr-4' /> Faqs</li>
  </ul>
</nav>
    </div>
    
    </div>
    
  )
}

export default Navbar
