import React from 'react'
import BestSellers from '../BestSellers'

const BestSellerMain = () => {
  return (
    <>
    <div className=''>
    {/* <p className='text-2xl mb-5 font-semibold hover:underline'>Our Best Sellers</p>  */}
    <BestSellers title="in clothes" more="/best_seller/products/clothes/" />
    <BestSellers title="in shoes" more="/best_seller/products/shoes/"/>
    <BestSellers title="in electronics" more="/best_seller/products/electronics/"/>
    </div>
    </>
  )
}

export default BestSellerMain