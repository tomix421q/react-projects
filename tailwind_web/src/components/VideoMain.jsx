import React from 'react'
import videoBg from '../video/Pexels Videos 4703.mp4'

const VideoMain = () => {
  return (
    <div className='absolute w-full h-screen -z-10 backdrop-invert'>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className=' object-cover w-full h-screen absolute '
      ></video>
    </div>
  )
}
export default VideoMain
