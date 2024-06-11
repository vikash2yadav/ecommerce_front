import { useFormik } from 'formik';
import React, { useState } from 'react'
import { forgotPasswordInitialValues, forgotPasswordSchema, otpCheckInitialValues, otpCheckSchema } from './Schema';
import { forgotPassword, otpVerification } from '../../../apis/user';
import { Link, useNavigate } from 'react-router-dom';
import InputC from '../../../components/InputC';
import CommonFooter from '../CommonFooter';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [otpSuccess, setOtpSuccess] = useState(false);

  const formik = useFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      let data = await forgotPassword(values);
      if (data.status === 200) {
        alert(data.data.message)
        setOtpSuccess(true);
      } else {
        alert(data.data.message)
      }
    }
  })

  const formik2 = useFormik({
    initialValues: otpCheckInitialValues,
    validationSchema: otpCheckSchema,
    onSubmit: async (values) => {
      let data = await otpVerification(values);
      if (data.status === 200) {
        navigate('/reset_password')
      } else {
        alert(data.data.message)
      }
    }
  })

  return (
    <>
      <div className='flex flex-col justify-center items-center mx-auto p-4 mb-4'>

        <Link to="" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span>
        </Link>

        <div className='mt-2 flex flex-col min-w-64 max-w-80 border rounded-lg px-6 py-2 border-solid border-gray-300'>
          <h1 className='text-2xl mb-3'>Password assistance</h1>
          <p className='text-xs mb-5'>Enter the email address or mobile phone number associated with your Amazon account.
          </p>

          {
            !otpSuccess &&
            <form action="" onSubmit={formik.handleSubmit}>
              <div className='mb-5'>
                <span className='text-xs font-semibold mb-1'>Email</span>
                <InputC type="email" name="email" id="" onChange={formik.handleChange}
                  value={formik.values.email} />
                {formik.errors.email && formik.touched.email ? (
                  <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                ) : null}
              </div>

              <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg'> Continue</button>
            </form>
          }

          {
            otpSuccess &&
            <form action="" onSubmit={formik2.handleSubmit}>
              <div className='mb-5'>
                <span className='text-xs font-semibold mb-1'>Otp</span>
                <InputC type="text" name="otp" id="" onChange={formik2.handleChange}
                  value={formik2.values.otp} />
                {formik2.errors.otp && formik2.touched.otp ? (
                  <div className='text-red-600 text-xs'>{formik2.errors.otp}</div>
                ) : null}
              </div>

              <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg'> check Otp</button>
            </form>
          }

        </div>
        <div className='mt-2 flex flex-col min-w-64 max-w-80 py-2'>
          <p className='text-sm font-semibold mb-1'>Has your email address or mobile phone number changed?</p>
          <p className='text-xs'>If you no longer use the e-mail address associated with your Amazon account, you may contact <span> <Link to="" className='text-blue-700 hover:text-red-500 hover:underline'>Customer Service</Link></span> for help restoring access to your account.</p>
        </div>
      </div>



      <hr className='h-0.5 mx-20 mb-4' />
      <CommonFooter/>
    </>
  )
}

export default ForgotPassword