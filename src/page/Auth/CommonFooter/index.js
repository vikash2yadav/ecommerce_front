import React from 'react'
import { Link } from 'react-router-dom'

const CommonFooter = () => {
    return (
        <>

            <div className='flex justify-center items-center text-xs mb-3'>
                <Link to="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Condition of use</Link>
                <Link to="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Privacy policy</Link>
                <Link to="" className='mx-5 text-blue-600 hover:text-red-600 hover:underline'>Help</Link>
            </div>
            <p className='text-xs text-center mb-10'>© 2023-2024, Ecommerce.com, Inc. or its affiliates</p>
        </>
    )
}

export default CommonFooter