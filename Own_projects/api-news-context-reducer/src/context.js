import React, { useContext, useEffect, useReducer } from 'react'

import { SET_LOADING, SET_NEWS, HANDLE_SEARCH, REMOVE_STORY } from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://newsapi.org/v2/everything?'
// q=Apple&from=2023-02-10&sortBy=popularity&apiKey=${process.env.REACT_NEWS_API}`

const initialState = {
  isLoading: true,
  data: [],
  query: 'react',
}

//
// CREATE CONTEXT & APPPROVIDER
//
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()

      dispatch({
        type: SET_NEWS,
        payload: { data: data.articles },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (index) => {
    dispatch({ type: REMOVE_STORY, payload: index })
  }

  useEffect(() => {
    fetchStories(
      `${API_ENDPOINT}q=${state.query}&apiKey=5ccbd445d5304f17a66c1ed2877a9108`
    )
  }, [])

  return (
    <AppContext.Provider value={{ ...state, removeStory }}>
      {children}
    </AppContext.Provider>
  )
}

//
// EXPORT
//
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
