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

  const handleNoteChange = (date, note) => {
    setNotes({ ...notes, [moment(date).format('YYYY-MM-DD')]: note })
  }

  const renderDay = (props, currentDate, isSelected) => {
    console.log('renderDay called')
    const note = notes[moment(currentDate).format('YYYY-MM-DD')]
    console.log(note)
    return (
      <div {...props} className='text-8xl bg-gray-500'>
        {props.children}
        {note && <div>ahgoooo</div>}
        <h1>hi</h1>
      </div>
    )
  }

  return (
    <div>
      <Calendar onChange={handleChange} value={date} renderDay={renderDay} />
      <input
        type='text'
        placeholder='Enter a note'
        onChange={(e) => handleNoteChange(date, e.target.value)}
      />
    </div>
  )
}

export default App
