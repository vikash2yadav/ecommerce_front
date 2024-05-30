import React from 'react'
import { Link } from 'react-router-dom'

const MyAccountCompo2 = ({ heading, links }) => {
    return (
        <>

            <div className='md:w-80 p-2 w-full h-48 border-2 flex flex-col p-4 border-gray-200 mb-6 rounded-xl'>

                <h1 className='text-m font-semibold mb-3 '>{heading}</h1>

                {
                    links.map((item) => {   
                        return (
                            <Link className='text-sm text-blue-800 hover:text-red-600 hover:underline'>{item.link}</Link>
                        )
                    })
                }
            </div>

        </>
    )
}

export default MyAccountCompo2