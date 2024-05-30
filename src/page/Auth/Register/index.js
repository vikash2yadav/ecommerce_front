import React from 'react'
import { CiHashtag } from "react-icons/ci";
import { useFormik } from 'formik'
import { registerInitialValues, registerSchema } from './Schema';
import InputC from '../../../components/InputC';
import { signUp } from '../../../apis/user';
import { Link, useNavigate } from 'react-router-dom';
import CommonFooter from '../CommonFooter';

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: registerInitialValues,
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            let data = await signUp(values);
            if (data.status === 200) {
                navigate('/login')
            } else {
                alert(data.data.message)
            }
        }
    })

    return (
        <>
            <div className='flex flex-col justify-center items-center  mx-auto p-2 mb-4'>

                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap blue:text-white"></span>
                </a>

                <div className='mt-2 flex flex-col min-w-64 max-w-96 border rounded-lg px-6 py-4 border-solid border-gray-300'>
                    <h1 className='text-2xl mb-3'>Create Account</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='mb-3'>
                            <p className='text-xs font-semibold mb-1'>First Name</p>
                            <InputC type="text" name="first_name" onChange={formik.handleChange}
                                value={formik.values.first_name} id="" />
                            {formik.errors.first_name && formik.touched.first_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <span className='text-xs font-semibold mb-1'>Last Name</span>
                            <InputC type="text" name="last_name" onChange={formik.handleChange}
                                value={formik.values.last_name} id="" />
                            {formik.errors.last_name && formik.touched.last_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <span className='text-xs font-semibold mb-1'>Email</span>
                            <InputC type="email" name="email" id="" onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className='mb-5'>
                            <span className='text-xs font-semibold'>Password</span>
                            <InputC type="password" name="password" id="" onChange={formik.handleChange}
                                value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                            <p className='text-xs font-semibold flex items-center mb-5'>
                                <span className='text-sky-700 px-1'><CiHashtag /></span>
                                Passwords must be at least 6 characters.
                            </p>
                        </div>

                        <p className="text-xs font-semibold mb-5"> To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                        <button className='mb-10 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg  '> Sign Up</button>
                    </form>
                    <hr className='h-0.5 mb-5' />

                    <p className='text-sm font-semibold mb-1'>Buying for work ?</p>
                    <Link to="" className='mb-5 text-sm text-blue-900 hover:underline hover:text-red-600'>create a free business account</Link>

                    <hr className='h-0.5 mb-5' />
                    <div className='flex mb-5'>
                        <p className='text-sm mb-1'>Already have an account ?
                            <Link to="/login" className='px-0.5 text-sm text-blue-900 hover:underline hover:text-red-600'>Sign in </Link></p>
                    </div>

                    <p className='text-xs font-semibold'>By creating an account or logging in, you agree to Amazon’s
                        <Link to="" href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Condition of use
                        </Link> and <Link to="" href="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Privacy policy</Link>.</p>

                </div>
            </div>
            <hr className='h-0.5 mx-20 mb-4' />
            <CommonFooter/>
        </>
    )
}

export default Register