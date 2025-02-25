import React from 'react'
import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWIND WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast,flexible financing for
          </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bol md:pl-4 pl-2 text-lime-400'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={190}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400 px-5'>
          Monitor your data analytics to increase revenue for BTB,BTC, & SASS
          platform.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:scale-125 hover:bg-lime-400 duration-500'>
          Get started
        </button>
      </div>
    </div>
  )
}
export default Hero
