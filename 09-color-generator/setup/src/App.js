import React, { useEffect, useState } from 'react'
import { TfiReload } from 'react-icons/tfi'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return '#' + n.slice(0, 6)
  }

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values(random_hex_color_code()).all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      setColor('')
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
      </section>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={!error ? '#f15025' : 'Like this: #f15025 <='}
          className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit'>
          submit
        </button>
        <button
          className='btn'
          type='button'
          style={{ margin: '10px' }}
          onClick={() => setList(new Values(random_hex_color_code()).all(10))}
        >
          <TfiReload />
        </button>
      </form>

      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
