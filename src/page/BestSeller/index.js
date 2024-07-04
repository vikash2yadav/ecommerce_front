import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import BestSellerContainers from '../../components/BestSellerContainers'
import BestSellerMain from '../../components/BestSellerMain'

const bestSeller = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: '70vh' }}>
                <BestSellerMain/>
            </div>  
            <Footer />
        </>
    )
}

export default bestSeller