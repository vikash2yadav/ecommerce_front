import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewReleaseMain from '../../components/NewReleaseMain'
// import NewReleaseContainers from '../../components/NewReleaseContainers'

const NewRelease = () => {
  return (
    <>
      <Header />
            <div style={{ minHeight: '70vh' }}>
                <NewReleaseMain />
            </div>  
            <Footer />
    </>
  )
}

export default NewRelease