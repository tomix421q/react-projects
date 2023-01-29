import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANYLYTICS DASHBOARD</p>
          <h1 className='md-text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage data analytics centrally
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3  cursor-pointer hover:scale-125 hover:bg-lime-400 hover:text-black duration-500 md:mx-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
export default Analytics
