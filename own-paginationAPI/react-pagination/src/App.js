import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <div>
      <h1 className='text-center text-4xl lg:text-8xl p-5 font-bold'>
        {loading ? 'Loading...' : 'Pagination...'}{' '}
      </h1>

      <section className='max-w-[1540px]  px-4 py-12  bg-gray-700 text-gray-200 mx-auto'>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 text-center gap-10'>
          {followers.map((products, index) => {
            return <Follower key={products.id} {...products} />
          })}
        </div>

        {/*  */}
        {/* BUTTTONS PAGINATION*/}
        {/*  */}
        <div className='mt-6'>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={` text-2xl m-1 p-2 text-gray-100 ${
                  index === page
                    ? 'border-2 border-yellow-400  bg-gray-800 rounded-2xl text-gray-100'
                    : null
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default App
