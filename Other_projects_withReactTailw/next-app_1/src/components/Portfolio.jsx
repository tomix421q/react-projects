import Image from 'next/legacy/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-6xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 md:gap-4'>
        {/*  */}
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        {/*  */}
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        {/*  */}
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        {/*  */}
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
        </div>
        {/*  */}
      </div>
    </div>
  )
}
export default Portfolio
