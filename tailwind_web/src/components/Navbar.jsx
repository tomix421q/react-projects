import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { TfiClose } from 'react-icons/tfi'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='flex hidden '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleNav}>
        {!nav ? <TfiClose size={20} /> : <CgMenuGridR size={20} />}
      </div>

      {/* MOBILE VERSION NAV  */}
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-4 mt-7'>
          REACT.
          <div className='w-[100px] h-1  bg-red-600  rounded-full animate-pulse'></div>
        </h1>

        <ul className='pt-12 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
      </div>
      {/*  */}
    </div>
  )
}
export default Navbar
