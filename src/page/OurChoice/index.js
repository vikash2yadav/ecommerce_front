import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import OurChoiceContainers from '../../components/OurChoiceContainers'

const OurChoice = () => {
  return (
    <>
     <Header />
            <div style={{ minHeight: '70vh' }}>
                <OurChoiceContainers />
            </div>  
            <Footer />
    </>
  )
}

export default OurChoice