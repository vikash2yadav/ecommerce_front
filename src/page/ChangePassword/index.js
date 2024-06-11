import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputC from '../../components/InputC'
import { useFormik } from 'formik'
import { changePasswordInitialValues, changePasswordSchema } from './Schema'

const ChangePassword = () => {
    const formik = useFormik({
        initialValues: changePasswordInitialValues,
        validationSchema: changePasswordSchema,
        onSubmit: () => { }
    })
    return (
        <>
            <Header />
            <div className='flex flex md:w-full justify-center items-center p-4 '>
                <div className='md:w-1/3 w-full py-4'>

                    <h1 className='text-2xl font-bold mb-3 '>Change password</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col w-full'>

                            <p className='text-sm font-semibold mb-1 mt-5'>Old Password</p>
                            <InputC type="text" name="old_password" onChange={formik.handleChange} value={formik.values.old_password} />
                            {formik.errors.old_password && formik.touched.old_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.old_password}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'> New Password</p>
                            <InputC type="passsword" name="new_password" onChange={formik.handleChange} value={formik.values.new_password} />
                            {formik.errors.new_password && formik.touched.new_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Confirm Password</p>
                            <InputC type="text" name="confirm_password" onChange={formik.handleChange} value={formik.values.confirm_password} />
                            {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                            ) : null}

                            <button type="submit" className='text-sm bg-yellow-400 shadow-xl md:w-1/3 w-full p-2 mt-5 rounded-xl mb-10'>Update Password</button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChangePassword