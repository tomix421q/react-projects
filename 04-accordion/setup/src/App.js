import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  const { id, title, info } = data
  return (
    <>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </>
  )
}

export default App
