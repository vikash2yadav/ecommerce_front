import React from 'react'

const ResetPassword = () => {
  return (
    <>
      {/* <div className='grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1'>

        <div className='grid sm:grid-cols-3 md:grid-cols-2 grid-cols-2'>
        <div className='border border-red-200'>logo</div>
        <div className='border border-red-200'>update address</div>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-1'>
        <div type="text" className='border border-red-500' ></div>
        </div>
       
       <div className='grid md:grid-cols-4 sm:grid-cols-4 grid-cols-4'>
       <div className='border border-red-200'>update address</div>
        <div className='border border-red-200'>update address</div>
        <div className='border border-red-200'>update address</div>
        <div className='border border-red-200'>update address</div>
       </div>
      </div> */}

      <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-rows-12'>

        <div className='grid sm:grid-cols-3 md:grid-cols-2 grid-cols-2'>
          <div className='border border-red-200'>logo</div>
          <div className='border border-red-200'>update address</div>
          <div type="text" className='border border-red-500' ></div>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-1'>
        <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
        </div>

        {/* <div className='grid md:grid-cols-4 sm:grid-cols-4 grid-cols-4'>
          <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
          <div className='border border-red-200'>update address</div>
        </div> */}
      </div>
    </>
  )
}

export default ResetPassword