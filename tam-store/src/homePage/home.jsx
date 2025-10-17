import React from 'react'
import NavBar from '../genrall components/navBar'
import HeroSection from './heroSection'
import LookOnProduct from './LookOnProduct'

function Home() {
  return (
    <>
        <NavBar/>
        <main>
            <HeroSection/>
            {/* add a swiper here **************/}
            <LookOnProduct/>
        </main>
    </>
  )
}

export default Home