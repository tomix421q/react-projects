import React from 'react'
import { categories } from '../data'

const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12 mx-auto'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top rated menu items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
            >
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <img className='w-20' src={item.image} alt={item.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category
