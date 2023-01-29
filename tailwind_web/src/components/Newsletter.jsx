import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 md:justify-center '>
        <div className='lg:col-span-2 my-4 text-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            It is a long established fact that
          </h1>
          <p>
            Lorem Ipsum passages, and more recently with desktop publishing
            software like
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black max-w-md'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium md:ml-4 my-6 mx-auto py-3 text-black cursor-pointer hover:scale-125 hover:bg-lime-400 duration-500'>
              Notify Me
            </button>
          </div>
          <p className='text-center'>
            We care about the protection of your data.{' '}
            <span className='text-[#00df9a]'>Read our Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
