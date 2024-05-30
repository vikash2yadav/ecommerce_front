import React from 'react'
import { CiHashtag } from "react-icons/ci";

const Register = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center  mx-auto p-2 mb-4'>

                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap blue:text-white"></span>
                </a>

                <div className='mt-2 flex flex-col min-w-64 max-w-96 border rounded-lg px-6 py-4 border-solid border-gray-300'>
                    <h1 className='text-2xl mb-3'>Create Account</h1>

                    <div className='mb-3'>
                        <p className='text-xs font-semibold mb-1'>First Name</p>
                        <input type="text" className='border border-gray w-full p-1 text-sm' name="" id="" />
                    </div>

                    <div className='mb-3'>
                        <span className='text-xs font-semibold mb-1'>Last Name</span>
                        <input type="text" className='border  border-gray w-full p-1 text-sm' name="" id="" />
                    </div>

                    <div className='mb-5'>
                        <span className='text-xs font-semibold'>Password</span>
                        <input type="text" className='border  border-gray w-full p-1 text-sm' name="" id="" />
                        <p className='text-xs font-semibold flex items-center mb-5'>
                            <span className='text-sky-700 px-1'><CiHashtag /></span>
                            Passwords must be at least 6 characters.
                        </p>
                    </div>

                    <p className="text-xs font-semibold mb-5"> To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                    <button className='mb-10 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg  '> Sign Up</button>
                    <hr className='h-0.5 mb-5' />

                    <p className='text-sm font-semibold mb-1'>Buying for work ?</p>
                    <a href="" className='mb-5 text-sm text-blue-900 hover:underline hover:text-red-600'>create a free business account</a>

                    <hr className='h-0.5 mb-5' />
                    <div className='flex mb-5'>
                        <p className='text-sm mb-1'>Already have an account ?
                            <a href="" className='px-0.5 text-sm text-blue-900 hover:underline hover:text-red-600'>Sign in  </a></p>
                    </div>

                    <p className='text-xs font-semibold'>By creating an account or logging in, you agree to Amazon’s
                        <a href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Condition of use
                        </a> and <a href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Privacy policy</a>.</p>

                </div>
            </div>
            <hr className='h-0.5 mx-20 mb-4' />

            <div className='flex justify-center items-center text-xs mb-3'>
                <a href="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Condition of use</a>
                <a href="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Privacy policy</a>
                <a href="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Help</a>
            </div>
            <p className='text-xs text-center mb-10'>© 2023-2024, Ecommerce.com, Inc. or its affiliates</p>
        </>
    )
}

export default Register