import React from 'react'
import Header from '../../components/Header'
import BestSellerByCategory from '../../components/BestSellerByCategory'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'

const BestSellerByCategoryPage = () => {
    let {cat} = useParams();
    return (
        <>
            <Header />
            <div style={{ minHeight: '70vh' }}>
                <BestSellerByCategory category={cat} />
            </div>
            <Footer />
        </>
    )
}

export default BestSellerByCategoryPage