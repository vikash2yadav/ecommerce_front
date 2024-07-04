import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const AboutMemberComponent = () => {
    return (
        <>
            <div className='md:w-64 h-auto py-6 border flex flex-col justify-center items-center border-gray-200 p-2'>

                <img className='mb-2' style={{ height: "100px", width: '100px', borderRadius: '50%' }} src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
                <p className='text-xl mb-5'>User name</p>
                <p className='text-sm font-semibold text-red-700 hover:underline'>Founder</p>
                <p className='text-center text-xs mb-5'>i am founder of  ecommerce and you can contact us </p>
                <div className='mt-6 flex justify-center items-center'>
                    <p className='mx-1 text-2xl'><a href="" className='hover:text-red-800'><CiFacebook /></a></p>
                    <p className='mx-1 text-2xl'><a href="" className='hover:text-red-800'><CiInstagram /></a></p>
                    <p className='mx-1 text-2xl'><a href="" className='hover:text-red-800'><MdOutlinePhone /></a></p>
                </div>
            </div>
        </>
    )
}

export default AboutMemberComponent