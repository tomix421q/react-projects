import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://jsonplaceholder.typicode.com/comments'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProduct = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))

    setLoading(false)
  }

  useEffect(() => {
    getProduct()
  }, [])
  return { loading, data }
}
