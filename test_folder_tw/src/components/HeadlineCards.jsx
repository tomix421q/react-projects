import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-W-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            sun is out, BOGO is out
          </p>
          <p className='px-2'>Through 8/16</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order now
          </button>
        </div>
        <img
          src='https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  )
}
export default HeadlineCards
