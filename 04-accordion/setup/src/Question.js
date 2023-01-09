import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [accor, setAccor] = useState(false)
  return (
    <>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={() => setAccor(!accor)}>
            {!accor ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{!accor ? '' : info}</p>
      </article>
    </>
  )
}

export default Question
