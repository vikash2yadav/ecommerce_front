import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { TfiAlert } from "react-icons/tfi";
import { Link, useNavigate } from 'react-router-dom';
import { loginInitialValues, loginSchema } from './Schema';
import InputC from '../../../components/InputC';
import { signIn } from '../../../apis/user';
import CommonFooter from '../CommonFooter';
import { LoginsContext } from '../../../context/LoginContext';
import { CommonsContext } from '../../../context/CommonContext';

const Login = () => {
    const navigate = useNavigate();

    let {UserLogin} = useContext(LoginsContext);
    let { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const formik = useFormik({
        initialValues: loginInitialValues,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            let data = await signIn(values);
            if (data.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                })
                UserLogin(data.data.data);
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data.data.message
                })
            }
        }
    })

    return (
        <>
            <div className='flex flex-col justify-center items-center  mx-auto p-2 mb-4'>

                <Link to="" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span>
                </Link>
                {
                    passwordError &&
                    <div className='mt-2 border border-red-600 p-2 flex items-center min-w-64 max-w-80  rounded-lg shadow-inner'>
                        <div className='text-2xl'><TfiAlert /></div>
                        <div className='mx-2'><p className='text-xl text-red-400'>{errorMessage}</p>
                            <p className='text-sm'>We cannot find an account with that email address</p></div>
                    </div>
                }

                <div className='mt-2 flex flex-col min-w-64 max-w-80 border rounded-lg px-6 py-2 border-solid border-gray-300'>
                    <h1 className='text-2xl mb-3'>Sign In</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='mb-5'>
                            <span className='text-xs font-semibold mb-1'>Email</span>
                            <InputC type="email" name="email" id="" onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='mb-5'>
                            <span className='text-xs font-semibold mb-1'>Password</span>
                            <InputC type="password" name="password" id="" onChange={formik.handleChange}
                                value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg  '> Continue</button>
                        <hr className='h-0.5 mb-5' />
                    </form>

                    <p className='text-xs font-semibold mb-5'>By continuing, you agree to Amazon's
                        <Link to="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Condition of use
                        </Link> and <Link to="" className='mx-1 text-blue-800 hover:text-red-500 hover:underline'>Privacy policy</Link>.</p>


                    <div className='mb-5 text-xs font-semibold text-blue-600 '>
                        <details>
                            <summary className='hover:underline'>Need help ?</summary>
                            <p> <Link to="/forgot_password" className='hover:underline hover:text-red-600'>Forgot password</Link></p>
                            <p> <Link to="" className='hover:underline hover:text-red-600'>problem to account login</Link></p>
                        </details>
                    </div>

                    <hr className='h-0.5 mb-4' />
                    <p className='text-sm font-semibold mb-1'>Buying for work ?</p>
                    <Link to="" className='mb-5 text-xs font-semibold text-blue-900 hover:underline hover:text-red-600'>Shop on ecommerce business </Link>

                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <span className='text-xs mb-3'> New to Ecommerce?</span>
                <button onClick={()=>navigate('/register')} className='mb-5 w-72 md:w-80 bg-white text-sm font-semibold border hover:bg-yellow-500 border-gray-300 p-1 rounded-lg  '> Create your account</button>

            </div>
            <hr className='h-0.5 mx-20 mb-4' />
            <CommonFooter/>
        </>
    )
}

export default Login