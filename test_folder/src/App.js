import React, { useState } from 'react'
import TourCard from './TourCard'

function App() {
  const [inputText, setInputText] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <div className='main'>
      <section className='input-container'>
        <div className='input-zone'>
          <form onSubmit={handleSubmit} className='form-container'>
            <input type='text' placeholder='insert some word' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </section>
      <section className='list-container'></section>
    </div>
  )
}

export default App
