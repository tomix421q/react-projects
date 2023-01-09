import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today </h3>

        <List peoplee={people} />

        <button onClick={() => setPeople([])}>Clear all</button>
        <button onClick={() => setPeople([...data])}>Load all</button>
      </section>
    </main>
  )
}

export default App
