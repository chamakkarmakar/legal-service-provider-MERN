import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/AboutUs/About'
import Services from '../Components/Services/Services'
import Prices from '../Components/PricingPlan/Prices'


const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Prices />
    </div>
  )
}

export default Home
