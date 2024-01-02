import React from 'react'
import Hero from './HomeComponents/Hero'
import Info from './HomeComponents/Info'
import About from './HomeComponents/About'
import BookAppointment from './HomeComponents/BookAppointment'
import Reviews from './HomeComponents/Reviews'
import Doctors from './HomeComponents/Doctors'
import Footer from './HomeComponents/Footer'



function Home() {
  return (
    <div className="home-section">
      {/* <Navbar /> */}
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      {/* <Reviews /> */}
      <Doctors />
      <Footer />
    </div>
  )
}

export default Home