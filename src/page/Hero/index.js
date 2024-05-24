import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Navbar2'

const Hero = () => {
  return (
    <>
    <Navbar/>
    <hr className='h-0.5 mx-auto bg-white max-w-screen-xl'></hr>
    <Navbar2 />
    <div style={{minHeight: '70vh'}}>
      
    </div>
    <Footer/>
    </>
  )
}

export default Hero