import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Info from '../components/Info'

function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Info/>
      <Explore/>
    </main>
  )
}

export default Home
