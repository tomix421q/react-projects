import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const { loading, data } = useFetch()
  // const [page, setPage] = useState(0)

  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data)
  }, [loading])

  return (
    <section className='max-w-[1540px]  m-auto px-4 py-12 bg-gray-400 text-gray-200'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10 mx-7'>
        {followers.map((products) => {
          return <Follower key={products.id} {...products} />
        })}
      </div>
    </section>
  )
}

export default App
