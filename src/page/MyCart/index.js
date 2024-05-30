import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReactStars from 'react-stars'
import { Select } from 'antd'

const MyCart = () => {
    return (
        <>
            <Header />
            <div className='flex flex-wrap justify-around w-full' style={{ border: '20px solid rgb(229 231 235 )' }} >
                <div className='w-2/3' >
                    <h1 className='text-2xl font-semibold p-1 mb-3 '>Shopping Cart</h1>
                    <hr className='text-gray-400' />

                    <div className='w-full py-5 flex flex-wrap px-10 justify-between'>
                        <div className='w-40'>
                            <img src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
                        </div>
                        <div className='w-96 flex py-2 flex flex-col'>
                            <h1 className='text-xl text-gray-600 font-semibold mb-1'>Vivo 17 Pro Max (5g) </h1>
                            <p className='text-sm mb-1'>23 in stocks</p>
                            <p className='text-xs mb-1'>Sold by : <span className='text-xs mx-2 text-blue-800 font-semibold'>ECOMMERCE</span></p>
                            <div className='flex  items-center mb-2'>
                                <img className='h-8 w-8' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                                <p className='text-xs mx-1'>Ecommerce Delivered</p>
                            </div>
                            <div className='text-sm mb-4 flex items-center'><div><input type="checkbox" /></div> <div className='mx-0.5'>this will be a gift.</div></div>

                            <div className='flex items-center'>
                                <Select name="Quantity" defaultValue={1} id="" className='w-20 border border-gray-200'>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </Select> <span className='mx-3'>|</span>
                                <button className='text-sm  hover:underline text-blue-800'>Delete</button>
                                <span className='mx-3'>|</span>
                                <button className='text-sm  hover:underline text-blue-800'>see more like this</button>
                                <span className='mx-3'>|</span>
                                <button className='text-sm  hover:underline text-blue-800'>share</button>
                            </div>

                        </div>

                        <div className='w-14 flex py-2 flex flex-col'>
                            <h1 className='text-xl font-semibold mb-2'>&#8377;20000 </h1>
                        </div>

                    </div>
                    <hr className='text-gray-200 mb-3' />
                    <p className='mb-10 text-end text-xl mx-4 font-semibold'>subtotal ( 1 items ) : <span className='mx-2'>&#8377; 20000</span></p>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center border border-gray-200 h-40' >
                    <p className='mb-1 text-xl mx-4'>subtotal ( 1 items ) : <span className='mx-2'>&#8377; 20000</span></p>
                    <div className='text-sm mb-4 flex items-center'><div><input type="checkbox" /></div> <div className='mx-0.5'>this order contains a gift.</div></div>
                    <button className='text-sm bg-yellow-400 hover:bg-yellow-500 shadow-xl w-4/5 h-8 rounded mb-1.5'>Procced to buy</button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default MyCart