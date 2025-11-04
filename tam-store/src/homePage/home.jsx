import React from 'react'
import NavBar from '../genrall components/navBar'
import HeroSection from './heroSection'
import LookOnProduct from './LookOnProduct'
import LimitedOffer from './limitedOffer'
import Productshow from '../product/Productshow'
import ExtraServices from './ExtraServices'
import Footer from '../genrall components/footer'

function Home() {
  return (
    <>
        {/* <NavBar/> */}
        <main>
            <HeroSection/>
           
            {/* add a swiper here **************/}
            <LimitedOffer/>
            <LookOnProduct categoury={'groceries'}/>
            <LookOnProduct categoury={'beauty'}/>
            <Productshow/>
            <ExtraServices/>
            {/* <Footer/> */}
            
        </main>
    </>
  )
}

export default Home