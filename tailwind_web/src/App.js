import React from 'react'
import Analytics from './components/Analytics'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import VideoMain from './components/VideoMain'

function App() {
  return (
    <div>
      <VideoMain />
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  )
}

export default App
