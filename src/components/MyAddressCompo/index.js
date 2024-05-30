import React from 'react'

const MyAddressCompo = ({ name, address, city, number, }) => {
    return (
        <>

            <div className='md:w-80 p-4 w-full h-60 border-2 flex flex-col justify-between border-gray-200 mb-6 rounded-xl'>
                <div>
                    <p className='text-m font-semibold'>{name}</p>
                    <p className='text-sm'>{address}</p>
                    <p className='text-sm'>{city}</p>
                    <p className='text-sm font-semibold'>Phone Number: {number}</p>
                    <p className='text-blue-800 hover:text-red-800 hover:underline text-sm mt-0.5'>
                        <a href="">Add Delivery instruction</a>
                    </p>
                </div>
                <div className='text-sm flex justify-start'>
                    <button className='text-blue-800 hover:text-red-800 hover:underline '>Edit</button>
                    <span className='mx-2'>|</span>
                    <button className='text-blue-800 hover:text-red-800 hover:underline'>Remove</button>
                </div>
            </div>


        </>
    )
}

export default MyAddressCompo