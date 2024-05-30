import React from 'react'

const ExtraSignIn = () => {
    return (
        <>
            <div className='mt-5 mb-5 flex border border-gray-300 rounded-xl justify-center items-center'>

                <div className="px-4 py-3 flex justify-center items-center flex-col">
                    <p className='mt-5 text-xs font-semibold mb-2'>See Personal Recommendations</p>
                    <button className='mb-1 w-64 bg-yellow-400 text-xs font-semibold border hover:underline py-2 rounded-lg'> Sign In</button>
                    <p className='text-xs mb-5'> New user? <span className='text-xs text-blue-500 hover:underline hover:text-red-500'><a href="">start here.</a></span></p>
                </div>

            </div>
        </>
    )
}

export default ExtraSignIn