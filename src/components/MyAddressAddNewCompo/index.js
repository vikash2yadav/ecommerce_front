import React from 'react'
import SelectC from '../../components/SelectC'
import InputC from '../../components/InputC'

const MyAddressAddNewCompo = () => {
    return (
        <>
            <div className='flex flex md:w-full justify-center items-center p-4 '>
                <div className='md:w-2/4 w-full py-4'>
                    <p className="text-sm mb-3 "><a href="" className="hover:underline hover:text-red-800">Your Account</a>
                        <a href="" className="hover:underline hover:text-red-800 mx-1">Your Address</a> 
                        <a href="" className="text-red-700 hover:underline  hover:text-red-800 mx-1">New Address</a> </p>

                    <h1 className='text-2xl font-bold mb-3 '>Add a new address</h1>

                    <div className='mb-3 border border-solid w-full h-14 bg-teal-300 rounded-xl flex justify-between p-2  items-center'>
                        <p className='text-sm mx-2'>Save time. Autofill your current location.</p>
                        <button className='mx-4 text-sm px-2 py-1 bg-white rounded'>Autofill</button>
                    </div>

                    <div className='flex flex-col w-full'>

                        <p className='text-sm font-semibold mb-1 mt-5'>Country/Region</p>
                        <SelectC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Full Name ( first and last name )</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
                        <InputC />
                        <p className='text-xs'>May be used to assist delivery</p>

                        <p className='text-sm font-semibold mb-1 mt-5'>Flat, House no., Building, Company, Apartment</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Town/City</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>State</p>
                        <SelectC />

                        <div className='flex items-center mt-5 mb-8'>
                            <input type="checkbox" />
                            <p className='mx-1 text-sm font-semibold'>Make this my default address</p>
                        </div>

                        <p className='text-sm font-semibold'>Delivery instructions (optional)</p>
                        <a href="" className='text-sm text-blue-800 hover:text-red-800 hover:underline mb-5'>Add preferences, notes, access codes and more</a>

                        <button className='text-sm bg-yellow-400 shadow-xl md:w-1/4 w-full p-2 mt-5 rounded-xl mb-1.5'>Add address</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAddressAddNewCompo