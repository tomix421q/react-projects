import React from 'react'
import { useGlobalContext } from './context'

const News = () => {
  const { isLoading, data } = useGlobalContext()
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section>
      {data.map((item) => {
        const { author, content } = item
        return (
          <article>
            <h3>{author}</h3>
            <p>{content}</p>
          </article>
        )
      })}
    </section>
  )
}
export default News
