import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[6rem] px-10 bg-white '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* CARD 1 */}
        <div className='w-full mt-12 shadow-2xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white shadow-xl rounded-xl'
            src={Single}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3  cursor-pointer hover:scale-110 hover:bg-lime-400 hover:text-black duration-500'>
            Start Trial
          </button>
        </div>
        {/* CARD 2 */}
        <div className='w-full shadow-xl mt-12 bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white shadow-xl rounded-xl'
            src={Double}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3  cursor-pointer hover:scale-110 hover:bg-lime-400 hover:text-black duration-500'>
            Start Trial
          </button>
        </div>
        {/* CARD 3 */}
        <div className='w-full shadow-xl mt-12 bg-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white shadow-xl rounded-xl'
            src={Triple}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3  cursor-pointer hover:scale-110 hover:bg-lime-400 hover:text-black duration-500'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cards
