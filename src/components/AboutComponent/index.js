import React from 'react'
import AboutMemberComponent from '../AboutMemberComponent'

const AboutComponent = () => {
    return (
        <>
            <div className='p-4'>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h1 className='mt-10 text-2xl text-center font-bold hover:underline hover:text-gray-400 mb-3'>About US</h1>
                    <p className='text-center'>We are proving online services and products and you can sell your products here.</p>
                </div>
                <hr className='text-gray-200 mb-10' />
                <h1 className='text-xl font-semibold text-blue-800 hover:underline mb-5'>Meet our team</h1>

                <div className='flex flex-wrap justify-evenly items-center mb-10'>
                <AboutMemberComponent/>
                </div>
                <hr className='text-gray-200 mb-10' />
                <h1 className='text-xl font-semibold text-blue-800 hover:underline mb-5'>Meet our top 5 Vendors</h1>
                <div className='flex flex-wrap justify-evenly items-center mb-10'>
                <AboutMemberComponent/>
                </div>
            </div>
        </>
    )
}

export default AboutComponent