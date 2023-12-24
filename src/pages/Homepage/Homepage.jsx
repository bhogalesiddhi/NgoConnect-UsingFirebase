import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
// import VolunteersSection from '../../components/VolunteersSection/VolunteersSection'
import Footer from '../../components/Footer/Footer'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Testimonials from '../../components/Testimonials/Testimonials'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <ServicesSection/>
      <Testimonials/>
      
      {/* <VolunteersSection/> */}
      <Footer/>
    </>
  )
}

export default Homepage