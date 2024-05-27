import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Boxes from '../../components/Boxes'
import ExtraSignIn from '../../components/ExtraSignIn'
import ProductListBox from '../../components/ProductListBox'
import Trendings from '../../components/Trendings'
import NewReleases from '../../components/NewReleases'
import OurChoices from '../../components/OurChoices'
import BestSellers from '../../components/BestSellers'

const Home = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61ryKP9ABsL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51LhcZsWGpL._SX1500_.jpg",
    "https://m.media-amazon.com/images/I/51FmePqetkL._SX1500_.jpg",
    "https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/A1Bqe5lNhDL._SX3000_.png"
  ]
  return (
    <>
      <Header />
      <div style={{ minHeight: '70vh' }}>
        <Hero images={images} />
        {/* <Boxes/> */}
        <ProductListBox />

        <div className='flex justify-between flex-wrap'>
          <div>
          <Trendings />
          </div>
          <div>
          <NewReleases />
        </div>
        <div>
          <OurChoices />
        </div>
        </div>
        <BestSellers/>

        <ExtraSignIn />
      </div>
      <Footer />
    </>
  )
}

export default Home