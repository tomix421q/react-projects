import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        {/*  */}
        {/* Mobile Button */}
        {/*  */}
        <div className='block sm:hidden z-10' onClick={() => handleNav()}>
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile menu  */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col'
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/' onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery' onClick={handleNav}>
                Gallery
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work' onClick={handleNav}>
                Work
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact' onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
