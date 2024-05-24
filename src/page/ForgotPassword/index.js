import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center mx-auto p-4 mb-4'>

        <a href="#" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span>
        </a>

        <div className='mt-2 flex flex-col min-w-64 max-w-80 border rounded-lg px-6 py-2 border-solid border-gray-300'>
          <h1 className='text-2xl mb-3'>Password assistance</h1>
          <p className='text-xs mb-5'>Enter the email address or mobile phone number associated with your Amazon account.
          </p>
          <div className='mb-5'>
            <span className='text-xs font-semibold mb-1'>Email</span>
            <input type="email" className='border  border-gray w-full p-1 text-sm' name="" id="" />
          </div>

          <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg'> Continue</button>

        </div>
        <div className='mt-2 flex flex-col min-w-64 max-w-80 py-2'>
          <p className='text-sm font-semibold mb-1'>Has your email address or mobile phone number changed?</p>
          <p className='text-xs'>If you no longer use the e-mail address associated with your Amazon account, you may contact <span> <a href="" className='text-blue-700 hover:text-red-500 hover:underline'>Customer Service</a></span> for help restoring access to your account.</p>
        </div>
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

export default ForgotPassword