import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Sun is out, BOGO is out
          </p>
          <p className='px-2'>Through 8/16</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order now
          </button>
        </div>
        <img
          className='max-h-[160px] min-h-full md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order now
          </button>
        </div>
        <img
          className='max-h-[190px] min-h-full md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80'
          alt='/'
        />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            We delivery orinaly deeps
          </p>
          <p className='px-2'>More like 10 variants</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order now
          </button>
        </div>
        <img
          className='max-h-[160px] min-h-full md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='/'
        />
      </div>
    </div>
  )
}
export default HeadlineCards
