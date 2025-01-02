import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Info from '../components/Info'
import s from './home.module.css'
import Footer from '../components/Footer'

function Home() {
  return (
    <main className={`${s.home} `}>
      <Nav/>
      <Hero/>
      <Info/>
      <Explore/>
      <Footer/>
    </main>
  )
}

export default Home
