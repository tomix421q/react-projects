import Image from 'next/legacy/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
        layout='responsive'
      ></Image>
      {/* Overlay  */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 group-hover:block hidden '>
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  )
}
export default InstagramImg
