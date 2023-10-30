import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
  return (
    // Navbar Section (left side)
    <div className='max-w-[1640px] mx-auto flex justify-between item-center p-4'
    >
      <div className='flex item-center'>
      <div className='cursor-pointer p-2'>
      <AiOutlineMenu size={30} />
      </div>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
      Travel<span className='font-bold'>Topia</span>
    </h1>
    <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]'>
      <p className='bg-black rounded-full p-2 text-white'>Home</p> 
      <p className='p-2 '>Affiliate</p>
    </div>

      </div>

    {/*Navbar Section (search Input)*/}
    <div className='bg-gray-200 rounded-full flex item-center px-1 w-[100px] sm:w-[200px] lg:w-[300px] '>
      <div className='p-3'>
      <AiOutlineSearch size={20} />
      </div>
      
      <input className='bg-transparent p-2 focus:outline-none w-full'  type="text" placeholder='Search Travel Location'>
      </input>

    </div>


    </div>
  )
}

export default Navbar
