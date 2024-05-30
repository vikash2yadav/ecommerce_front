import Search from 'antd/es/transfer/search'
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import Slider from '@mui/material/Slider';

const ProductDetailReviews = () => {
    return (
        <>
            <div className='w-full px-4 '>
                <hr className='mb-5 mx-4' />

                <h1 className='text-2xl font-semibold mb-3'>Looking for specific info?</h1>
                <div className='md:w-96 mb-10' style={{ width: '100%' }}>
                    <Search placeholder='search in all reviews' />
                </div>
                <hr className='mb-5 mx-4' />

                <div className='w-full py-10 flex flex-wrap justify-around'>
                    <div className='w-96 flex py-6 flex flex-col'>
                        <h1 className='text-2xl font-semibold mb-2'>Customer reviews </h1>
                        <p className='flex font-semibold text-sm mb-3'><span className='mx-1'><ReactStars value={4} /> </span>
                            |  <span className='mx-2'>4.1 out of 5</span></p>
                        <p className='mb-5'>10 ratings</p>
                        <hr className='mb-5' />
                        <h1 className='text-xl font-semibold mb-2'>Review this product </h1>
                        <p className='text-sm mb-5'>Share your thoughts with other customers</p>
                        <button className='text-sm border border-gray-400 bg-white w-full h-8 rounded-xl'>write review</button>
                    </div>

                    <div className='flex flex-col justify-evenly'>
                        <select name="" id="" className='border border-gray-400 mb-6 rounded'>
                            <option value="">Top reviews</option>
                            <option value="">Previous reviews</option>
                        </select>
                        <div className='w-64 py-4 mb-1 flex justify-center items-start flex-col'>
                            {/* <div className='h-4 w-4 mb-1' style={{ borderRadius: '50%' }}>
                                <img src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
                            </div> */}
                            <p className='text-sm text-blue-700 underline hover:text-red-600'><a href="">User Name</a></p>
                            <p className='flex items-center'><ReactStars /> <span className='mx-1 text-xs'>2.5 / 5</span></p>
                            <p className=''>this product is very nice</p>
                        </div>

                        <p><a href="" className='text-blue-700 hover:underline hover:text-red-600'>Read more...</a></p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailReviews