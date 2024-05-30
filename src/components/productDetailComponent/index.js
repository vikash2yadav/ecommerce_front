import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'
import { FaLocationDot } from "react-icons/fa6";
import ProductDetailReviews from '../ProductDetailReviews';

const ProductDetailComponent = () => {

    const [activeImage, setActiveImage] = useState('https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg');
    return (
        <>

            <div className='w-full px-4 flex '>
                <div className='flex flex-col'>
                    <img className="h-14 w-14 mt-10 pointer" onClick={() => setActiveImage('https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg')} src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
                    <img className="h-14 w-14 mt-10" onClick={() => setActiveImage('https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg')} src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
                    <img className="h-14 w-14 mt-10" onClick={() => setActiveImage('https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg')} src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
                </div>

                <div className='w-full py-10 flex flex-wrap justify-evenly'>
                    <div className=''>
                        <img className="h w-80 " src={activeImage} alt="" />
                    </div>

                    <div className='w-96 flex py-6 flex flex-col'>
                        <h1 className='text-2xl text-gray-600 font-semibold mb-2'>Vivo 17 Pro Max (5g) </h1>
                        <p className='flex font-semibold text-sm mb-6'>4.1 <span className='mx-2'><ReactStars value={4} /> </span>
                            |  <span className='mx-2'>19 reviews </span>| <Link to="" className='text-blue-600 mx-2 hover:underline'>Search this product</Link></p>

                        <p className='text-sm mb-1'>2k+ bought in the last months</p>
                        <hr className='bg-gray-200  mb-5' />
                        <p className='text-3xl text-red-400 mb-2'>-24% <span className='mx-2 text-black'>
                            <span className='text-xl '>&#8377;</span> 20000</span></p>
                        <p className='text-sm mb-6'>M.R.P.: <span className='line-through'>&#8377; 22000</span></p>

                        <p className='text-sm font-semibold mb-3'>Inclusive of all taxes</p>
                        {/* <p className='text-sm mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. psum dolor, sit amet consectetur adipisicing elit. </p> */}
                        {/* <p className='text-orange-400 font-semibold text-xl mb-2 '>&#8377; 20000 </p> */}
                        <div className=' mb-10'>
                            <hr className='text-gray-200 mb-3' />
                            <div className='h-20 flex justify-evenly items-center'>
                                <div className='items-center flex flex-col w-18 text-center'>
                                    <img className='h-8 w-8' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                                    <p className='text-sm'>Free delivery</p>
                                </div>

                                <div className='items-center flex flex-col'>
                                    <img className='h-8 w-8' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" alt="" />
                                    <p className='text-sm'>Secure transaction</p>
                                </div>

                                <div className='items-center flex flex-col'>
                                    <img className='h-8 w-8' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                                    <p className='text-sm'>Non-returnable</p>
                                </div>
                            </div>
                            <hr className='text-gray-200' />
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold'>About :</h1>
                            <div typeof='disc'>
                                <div className='flex'><li></li>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                <div className='flex'><li></li>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                <div className='flex'><li></li>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                    </div>

                    <div className='w-56 p-4 border border-gray-300'>
                        <p className='text-2xl'>&#8377; 20000</p>
                        <p className='text-sm my-4 text-blue-800'>Free Delivery
                            <span className='text-black font-semibold'> Wednesday, 20 May</span> </p>
                        <p className='text-sm my-4'>Or Fastest Delivery
                            <span className='text-black font-semibold'> Tomorrow, 19 May
                                .Order within</span> <span className='text-gray-400'>5 hours 29 mins</span> </p>
                        <a href="" className='hover:text-blue-900 hover:underline '><p className='text-sm  my-4 text-blue-700  mb-10'>Delivering at<span className='mx-1'>Ahmedabad-382330</span> </p></a>

                        <p className='text-xl text-blue-600 mb-3'>In Stocks</p>
                        <div className='flex justify-center flex-col mb-3'>
                            <p className='text-xs mb-3'>Ships from : <span className='text-gray-500 text-sm  font-semibold hover:underline'><a href="">Ecommerce</a></span></p>
                            <p className='text-xs'>sold by : <span className='hover:underline text-gray-500 text-sm font-semibold'><a href="">private ltd.</a></span></p>
                        </div>
                        <p className='text-sm mb-5'>Quantity : <select defaultValue={1} name="" id="">
                            <option value="">1</option><option value="">2</option><option value="">3</option>
                        </select></p>
                        <div className='mb-3'>
                            <button className='text-sm bg-yellow-400 shadow-xl w-full h-7 rounded-xl mb-1.5'>Add to cart</button>
                            <button className='text-sm bg-orange-400 shadow-xl w-full h-7 rounded-xl'>Buy Now</button>
                        </div>
                        <hr />
                        <button className=' mt-3 text-sm border border-gray-400 shadow-xl bg-white w-full h-7 rounded-xl'>Add to wishlist</button>

                    </div>
                </div>
            </div>

            <ProductDetailReviews/>
        </>
    )
}

export default ProductDetailComponent