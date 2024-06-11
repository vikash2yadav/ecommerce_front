import React from 'react'
import { useFormik } from 'formik';
import { resetPassword } from '../../../apis/user';
import { Link } from 'react-router-dom';
import InputC from '../../../components/InputC';
import CommonFooter from '../CommonFooter';
import { resetPasswordInitialValues, resetPasswordSchema } from './Schema';

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      let data = await resetPassword(values);
      if (data.status === 200) {
        alert(data.data.message);
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
          <h1 className='text-2xl mb-3'>Reset Password</h1>
          <p className='text-xs mb-5'>You can change your password now.
          </p>

          <form action="" onSubmit={formik.handleSubmit}>
            <div className='mb-5'>
              <span className='text-xs font-semibold mb-1'>New Password</span>
              <InputC type="new_password" name="new_password" id="" onChange={formik.handleChange}
                value={formik.values.new_password} />
              {formik.errors.new_password && formik.touched.new_password ? (
                <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
              ) : null}
            </div>

            <div className='mb-5'>
              <span className='text-xs font-semibold mb-1'>Confirm Password</span>
              <InputC type="confirm_password" name="confirm_password" id="" onChange={formik.handleChange}
                value={formik.values.confirm_password} />
              {formik.errors.confirm_password && formik.touched.confirm_password ? (
                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
              ) : null}
            </div>

            <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg'> Change password</button>
          </form>

        </div>
      </div>

      <hr className='h-0.5 mx-20 mb-4' />
      <CommonFooter />
    </>
  )
}

export default ResetPassword