import React from 'react'
import videoBg from '../video/video (1).mp4'

const VideoMain = () => {
  return (
    <div className='hidden md:block'>
      <div className='absolute w-full h-screen -z-10 blur-sm'>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className=' object-cover w-full h-screen absolute '
        ></video>
      </div>
    </div>
  )
}
export default VideoMain
