import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CommonFooter from '../Auth/CommonFooter'
import { useFormik } from 'formik'
import InputC from '../../components/InputC'
import { removeAccountInitialValues, removeAccountSchema } from './Schema'
import {deleteMyAccount} from '../../apis/customer'
import { CommonsContext } from '../../context/CommonContext';

const MyAccountDelete = () => {

    const navigate = useNavigate();
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const formik = useFormik({
        initialValues: removeAccountInitialValues,
        validationSchema: removeAccountSchema,
        onSubmit: async (values) => {
            let data = await deleteMyAccount(values);
            if(data.status === 200){
                formik.resetForm();
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                });
            }else{
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data?.data?.message
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

                <div className='mt-2 flex flex-col min-w-80 max-w-96 border rounded-lg px-6 py-2 border-solid border-gray-300'>
                    <h1 className='text-2xl mb-3'>Delete Account</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='mb-5'>
                            <span className='text-xs font-semibold mb-1'>Email</span>
                            <InputC type="email" name="email" id="" onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='mb-6'>
                            <span className='text-xs font-semibold mb-1'>Password</span>
                            <InputC type="password" name="password" id="" onChange={formik.handleChange}
                                value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button className='mb-5 w-full bg-yellow-400 text-sm font-semibold border hover:bg-yellow-500 p-1 rounded-lg'> Delete Account</button>
                        <hr className='h-0.5 mb-5' />
                    </form>

                    <p className='text-xs font-semibold mb-5'>if you will do this, you will lost your account. </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <button onClick={()=>navigate('/')} className='mb-5 w-72 md:w-80 bg-white text-sm font-semibold border hover:bg-yellow-500 border-gray-300 p-1 rounded-lg  '> Go to home page</button>

            </div>
            <hr className='h-0.5 mx-20 mb-4' />
            <CommonFooter />
        </>
    )
}

export default MyAccountDelete