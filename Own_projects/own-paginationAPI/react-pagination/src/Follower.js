import React from 'react'

const Follower = ({ name, id, email, body }) => {
  return (
    <article className='  shadow-black shadow-2xl  flex   max-h-[900px] h-auto mx-auto justify-center p-4  text-sm  lg:text-xl  bg-slate-800 hover:scale-105 duration-200 cursor-pointer'>
      <div className=''>
        <div className='flex justify-between border-b-2 p-1  px-2 '>
          <h3 className='mx-4 py-2'>{name}</h3>
          <h3 className='w-[100px]'>
            Post ID:
            <span className='text-red-900 bg-yellow-400 p-1 ml-2 '>
              {id}
            </span>{' '}
          </h3>
        </div>

        <div className=' flex flex-col '>
          <p className='pt-5 border-b-2 pb-4'>{body}</p>
          <h4 className='text-'>{email}</h4>
        </div>
      </div>
    </article>
  )
}
export default Follower
