import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const App = () => {
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState({})

  const handleChange = (date) => {
    setDate(date)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notes.map((note) => {
      return <h1>{note}</h1>
    })
  }

  console.log(notes)

  const handleNoteChange = (date, note) => {
    setNotes({ note })
  }

  const renderDay = (props, currentDate, isSelected) => {
    console.log('renderDay called')
    const note = notes[moment(currentDate).format('YYYY-MM-DD')]
    console.log(note)
    return (
      <div {...props}>
        {props.children}
        {note && <div>ahgoooo</div>}
        <h1>hi</h1>
      </div>
    )
  }

  return (
    <div className='translate-x-[40%]'>
      <Calendar onChange={handleChange} value={date} renderDay={renderDay} />
      <input
        type='text'
        placeholder='Enter a note'
        onChange={(e) => handleNoteChange(date, e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}

export default App
