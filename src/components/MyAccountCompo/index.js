import React from 'react'
import { Link } from 'react-router-dom'

const MyAccountCompo = ({img, title, description, to}) => {
    return (
        <>
            <Link className='' to={to}>
                <div className='md:w-80 hover:bg-gray-100 p-2 w-full h-28 border-2 flex justify-evenly  border-gray-200 mb-6 rounded-xl'>
                    <img className='h-14 w-18' src={img} alt="" />

                    <div className='flex flex-col'>
                        <p className=' text-xl mb-1'>{title}</p>
                        <p className='text-sm'>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MyAccountCompo