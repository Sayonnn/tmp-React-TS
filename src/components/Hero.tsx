import React from 'react'
import bg3 from '../assets/videos/bg_3.mp4'

function Hero() {
  return (
    <section className={`relative`}>
        <video src = {bg3} className = {`object-cover w-full h-[100vh] absolute left-0 top-0`} muted loop autoPlay ></video>
        <div className={` w-full h-[100vh] z-10 relative md:px-40 md:pt-[100px] pt-[60px] p-4`}> </div>
    </section>
  )
}

export default Hero
