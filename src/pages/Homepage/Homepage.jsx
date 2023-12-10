import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import VolunteersSection from '../../components/VolunteersSection/VolunteersSection'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <VolunteersSection/>
    </>
  )
}

export default Homepage