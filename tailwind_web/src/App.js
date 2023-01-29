import React from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import VideoMain from './components/VideoMain'

function App() {
  return (
    <div>
      <VideoMain />
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  )
}

export default App
