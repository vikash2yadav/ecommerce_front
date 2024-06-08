import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputC from '../../components/InputC'
import SelectC from '../../components/SelectC'

const MyProfile = () => {
    return (
        <>
            <Header />
            <div className='flex flex md:w-full justify-center items-center p-4 '>
                <div className='md:w-2/4 w-full py-4'>
                    <h1 className='text-2xl font-bold mb-3 '>Your profile</h1>

                    <div className='mb-3 border border-solid w-full h-8 bg-teal-300 rounded-xl flex justify-between p-2  items-center'>
                        <p className='text-sm mx-2'>you can change your profile here...</p>
                    </div>

                    <div className='flex flex-col w-full'>

                        <p className='text-sm font-semibold mb-1 mt-5'>First Name</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Last Name</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Email</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Mobile Number country code</p>
                        <SelectC />

                        <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number country code</p>
                        <SelectC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number</p>
                        <InputC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Birth date</p>
                        <InputC />
                        
                        <p className='text-sm font-semibold mb-1 mt-5'>Gender</p>
                        <SelectC />

                        <p className='text-sm font-semibold mb-1 mt-5'>Language Priority</p>
                        <SelectC />

                        <button className='text-sm bg-yellow-400 shadow-xl md:w-1/4 w-full p-2 mt-5 rounded-xl mb-1.5'>Update profile</button>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyProfile