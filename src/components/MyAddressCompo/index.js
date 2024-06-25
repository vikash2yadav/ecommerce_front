import React from 'react'
import { Link } from 'react-router-dom'

const MyAddressCompo = ({ item, handleDefaultAddressChange, handleDeleteAddress, handleEditAddress }) => {

    return (
        <>
            <Link >
                <div className='md:w-80 p-4 w-full h-60 border-2 flex flex-col justify-between border-gray-200 mb-6 rounded-xl'>
                    <div onClick={handleDefaultAddressChange}>

                        <p className='text-m font-semibold'>{item?.user_name}</p>
                        <p className='text-sm'>{item?.street}</p>
                        <p className='text-sm'>{item?.area} - {item?.pin_code}</p>
                        <p className='text-sm mb-3'>{item?.city?.name}</p>
                        <p className='text-sm font-semibold'>Phone Number: <span className=''>{item?.contact_no}</span></p>
                        <p className='text-blue-800 hover:text-red-800 hover:underline text-sm mt-0.5'>
                            <a href="">Add Delivery instruction</a>
                        </p>
                        {/* <p className='text-xs mb-3'>instruction: {ite   m?.instruction}</p> */}
                    </div>
                    <div className='text-sm flex justify-between items-center'>
                        <div>
                            <button onClick={() => handleEditAddress(item)} className='text-blue-800 hover:text-red-800 hover:underline '>Edit</button>
                            <span className='mx-2'>|</span>
                            <button onClick={() => handleDeleteAddress(item)} className='text-blue-800 hover:text-red-800 hover:underline'>Remove</button>
                        </div>

                        {
                            item?.is_default ? (
                                <div className='flex justify-end items-center '>
                                    <button className="text-sm bg-green-400 text-white px-1.5 py-0.5 rounded-xl">Default</button>
                                </div>
                            ) : ''
                        }
                    </div>
                </div>
            </Link>

        </>
    )
}

export default MyAddressCompo