import React from 'react'
import { useGlobalContext } from './context'

const News = () => {
  const { isLoading, data } = useGlobalContext()
  console.log(data)
  if (isLoading) {
    return (
      <div className='w-full h-screen text-white bg-gray-700 text-5xl lg:text-8xl lg:pt-[15%] text-center pt-[30%]'>
        Loading...
      </div>
    )
  }

  return (
    <section className='bg-zinc-900 text-gray-200 grid p-16 max-w-[1250px] m-auto md:grid-cols-2 lg:grid-cols-3'>
      {data.map((item, index) => {
        const { author, content, title, urlToImage, url } = item
        return (
          <article key={index} className='p-5 mb-20'>
            <h2 className='text-lg underline '>{title}</h2>
            <h4 className='text-red-300 text-xs'>{author}</h4>
            <p>
              {content}{' '}
              <a href={url} className='text-red-400'>
                more...
              </a>
            </p>
            <div>
              <img src={urlToImage} alt={title} />
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default News
