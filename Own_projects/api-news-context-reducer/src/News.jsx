import React from 'react'
import { useGlobalContext } from './context'

const News = () => {
  const { isLoading, data, removeStory } = useGlobalContext()

  if (isLoading) {
    return (
      <div className='w-full h-screen text-white bg-gray-700 text-5xl lg:text-8xl lg:pt-[15%] text-center pt-[30%]'>
        Loading...
      </div>
    )
  }

  return (
    <section className='bg-zinc-900 text-gray-200 grid md:p-12 p-8 max-w-[1250px] m-auto md:grid-cols-2 lg:grid-cols-3'>
      {data.map((item, index) => {
        const { name, author, content, title, urlToImage, url } = item
        return (
          <article
            key={name}
            className='max-w-[500px]  mx-auto text-sm  md:p-10 md:text-[16px] mb-20 border-b-2 shadow-sm shadow-gray-700 hover:scale-105 duration-300 '
          >
            <div className='min-h-[250px]'>
              <h2 className='text-lg underline '>{title}</h2>
              <h4 className='text-red-300 text-xs'>{author}</h4>
              <p>
                {content}{' '}
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-red-400'
                >
                  more...
                </a>
              </p>
            </div>

            <div className=''>
              <img
                className='object-cover w-full h-[200px] mt-2 object-bottom'
                src={urlToImage}
                alt={title}
              />
            </div>

            <button
              onClick={() => removeStory(index)}
              className='text-lg my-6 m-auto flex  bg-red-400 p-2 rounded-xl hover:scale-110 duration-200 '
            >
              Remove item...
            </button>
          </article>
        )
      })}
    </section>
  )
}
export default News
