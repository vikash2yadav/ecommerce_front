import Search from 'antd/es/transfer/search'
import React from 'react'
import SelectC from '../SelectC'
import { Link } from 'react-router-dom'

const OrderDetails = () => {
    return (
        <>
            <div className='p-2 flex flex-col md:px-40 px-4 w-full'>

                <p className="text-sm mb-5"><a href="" className=" hover:underline hover:text-red-800">Your Account</a> >
                    <a href="" className="text-red-700 hover:underline hover:text-red-800 mx-1">Your Orders</a> </p>

                <div className='flex mb-6 flex-wrap justify-between items-center'>
                    <h1 className='text-3xl  mb-5'>Your Orders</h1>
                    <div className='flex items-center'>
                        <Search placeholder='Search orders' />
                        <button className='mx-2 text-sm rounded-2xl bg-black text-white px-2 w-40 h-8 py-1'>Search Orders</button>
                    </div>
                </div>

                <div className='flex mb-1 text-sm'>
                    <Link to="/my/orders" className='mx-4 text-blue-800 hover:underline hover:text-red-800'>Orders</Link>
                    <Link to="/my/orders/buy_again" className='mx-4 text-blue-800 hover:underline hover:text-red-800'>Buy Again</Link>
                    <Link to="/my/orders/not_shipped" className='mx-4 text-blue-800 hover:underline hover:text-red-800'>Not Yet Shipped</Link>
                    <Link to="/my/orders/cancelled" className='mx-4 text-blue-800 hover:underline hover:text-red-800'>Cancelled Orders</Link>
                </div>
                <hr className='text-gray-200 mb-6' />

                <div className='flex justify-start items-center mb-5'>
                    <p className='text-sm font-semibold'>O orders </p> <span className='mx-1 text-sm'>placed in</span>
                    <SelectC classname='w-28 h-8' />
                </div>

                <div className='w-full flex flex-col mb-5'>

                    <div className='w-full h-64 rounded-xl border-2 border-gray-200'>
                        <div className='h-14 text-sm w-full rounded-t bg-gray-200 flex justify-around items-center '>
                            <div className='flex flex-col md:text-sm text-xs'>
                                <p className='md:text-sm text-xs'>ORDER PLACED </p>
                                <p>20 Aug, 3030</p>
                            </div>
                            <div className='flex flex-col'>
                                <p>TOTAL</p>
                                <p> &#8377; 199</p>
                            </div>
                            <div className='flex flex-col'>
                                <p>SHIP TO</p>
                                <p> Vikash Yadav</p>
                            </div>
                            <div className='flex flex-col'>
                                <p>ORDER # 405-4129409-2433118</p>
                                <p>View order details <span className='mx-4'>|</span> invoice</p>
                            </div>
                        </div>

                        <div className='flex justify-evenly h-40 items-center px-8 '>
                            <img className='h-28 w-28' src="https://m.media-amazon.com/images/I/41DopHdSvCL._SY180_.jpg" alt="" />

                            <div className='flex flex-col md:w-2/4'>
                                <h1 className='text-sm hover:underline hover:text-red-800 mb-1'>AmazonBasics Glove with Protective Padding for Cycling, Riding, Camping and Gym, Set of 2, XL</h1>
                               <p className='text-xs mb-2'>Return window closed on 29 aug, 2023</p>
                               <div className='flex'>
                               <button className='mx-1 rounded-xl w-28 h-8 bg-yellow-400 text-xs'>Buy it again</button>
                                <button className='mx-1 border border-gray-300 rounded-xl w-28 h-8 bg-white text-xs'>View  your item</button>
                               </div>
                            </div>

                            <button className='border border-2 border-200 rounded-xl shadow-xl w-56 h-8 text-sm'>Write a product review</button>
                        </div>

                        <hr className='text-gray-200 ' />
                        <div className='mb-3 h-16'>
                            <a className='mx-2 text-sm text-blue-800 hover:underline hover:text-red-800'>Archive Orders</a>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default OrderDetails