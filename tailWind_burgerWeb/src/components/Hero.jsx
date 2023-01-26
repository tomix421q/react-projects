import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>
            Foods <span className='text-orange-500'>Devlivered</span>
          </h1>
        </div>
        <img
          className='w-full h-56 md:h-[500px] sm:object-bottom object-cover xl:object-bottom'
          src='https://images.pexels.com/photos/15082383/pexels-photo-15082383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='burger food'
        />
      </div>
    </div>
  )
}
export default Hero
