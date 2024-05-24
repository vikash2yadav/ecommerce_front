import React from 'react'
import { CiHashtag } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa";
import { TfiAlert } from "react-icons/tfi";

const Login = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center  mx-auto p-2 mb-4'>

                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span>
                </a>

                <div className='mt-2 border border-red-600 p-2 flex items-center min-w-64 max-w-80  rounded-lg shadow-inner'>
                    <div className='text-2xl'><TfiAlert/></div>
                <div className='mx-2'><p className='text-xl text-red-400'>incorrect email address</p>
                <p className='text-sm'>We cannot find an account with that email address</p></div>
                </div>

                <div className='mt-2 flex flex-col min-w-64 max-w-80 border rounded-lg px-6 py-2 border-solid border-gray-300'>
                    <h1 className='text-2xl mb-3'>Sign In</h1>

                    <div className='mb-5'>
                        <span className='text-xs font-semibold mb-1'>Email</span>
                        <input type="email" className='border  border-gray w-full p-1 text-sm' name="" id="" />
                    </div>
                    <div className='mb-5'>
                        <span className='text-xs font-semibold mb-1'>Password</span>
                        <input type="password" className='border  border-gray w-full p-1 text-sm' name="" id="" />
                    </div>

                    <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg  '> Continue</button>
                    <hr className='h-0.5 mb-5' />

                    <p className='text-xs font-semibold mb-5'>By continuing, you agree to Amazon's
                        <a href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Condition of use
                        </a> and <a href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Privacy policy</a>.</p>


                    <div className='mb-5 text-xs font-semibold text-blue-600 '>
                        <details>
                            <summary className='hover:underline'>Need help ?</summary>
                            <p> <a href="" className='hover:underline hover:text-red-600'>Forgot password</a></p>
                            <p> <a href="" className='hover:underline hover:text-red-600'>problem to account login</a></p>
                        </details>
                    </div>

                    <hr className='h-0.5 mb-4' />
                    <p className='text-sm font-semibold mb-1'>Buying for work ?</p>
                    <a href="" className='mb-5 text-xs font-semibold text-blue-900 hover:underline hover:text-red-600'>Shop on ecommerce business </a>

                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <span className='text-xs mb-3'> New to Ecommerce?</span>
                <button className='mb-5 w-72 md:w-80 bg-white text-sm font-semibold border hover:bg-yellow-500 border-gray-300 p-1 rounded-lg  '> Create your account</button>

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

export default Login