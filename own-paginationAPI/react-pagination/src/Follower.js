import React from 'react'

const Follower = ({ name, postId, email, body }) => {
  return (
    <article className='relative  flex w-m-[400px] max-h-content h-80 justify-center border-b-2 p-4 rounded-3xl text-lg lg:text-sm bg-slate-800 '>
      <div className=''>
        <div className='flex justify-between border-b-2 p-1  px-2 '>
          <h3 className='mx-4'>{name}</h3>
          <h3>
            Post ID:{' '}
            <span className='text-red-900 bg-yellow-400 p-1'>{postId}</span>{' '}
          </h3>
        </div>

        <div className='relative flex flex-col '>
          <p className='pt-5 border-b-2 pb-4'>{body}</p>
          <h4 className='text-'>{email}</h4>
        </div>
      </div>
    </article>
  )
}
export default Follower
