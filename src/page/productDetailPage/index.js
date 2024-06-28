import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductDetailComponent from '../../components/productDetailComponent'
import {useParams} from 'react-router-dom'

const ProductDetailPage = () => {
  const {id} = useParams();

  return (
    <>
      <Header />
      <ProductDetailComponent id={id} />
      <Footer />
    </>
  )
}

export default ProductDetailPage