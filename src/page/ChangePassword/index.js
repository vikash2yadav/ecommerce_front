import React, { useContext } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputC from '../../components/InputC'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom';
import { changePasswordInitialValues, changePasswordSchema } from './Schema'
import { changePassword } from '../../apis/customer'
import { CommonsContext } from '../../context/CommonContext';

const ChangePassword = () => {
    const navigate = useNavigate();
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const formik = useFormik({
        initialValues: changePasswordInitialValues,
        validationSchema: changePasswordSchema,
        onSubmit: async (values) => {
            let data = await changePassword(values);
            if (data.status === 200) {
                formik.resetForm();
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                  type: 'success',
                  message: data?.data?.message
                });
                navigate('/login');
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
            <Header />

            <div className='flex flex md:w-full justify-center items-center p-4 '>
           

                <div className='md:w-1/3 w-full py-4'>
     
                    <h1 className='text-2xl font-bold mb-3 '>Change password</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col w-full'>

                            <p className='text-sm font-semibold mb-1 mt-5'>Current Password</p>
                            <InputC type="password" name="old_password" onChange={formik.handleChange} value={formik.values.old_password} />
                            {formik.errors.old_password && formik.touched.old_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.old_password}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'> New Password</p>
                            <InputC type="password" name="new_password" onChange={formik.handleChange} value={formik.values.new_password} />
                            {formik.errors.new_password && formik.touched.new_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Confirm Password</p>
                            <InputC type="password" name="confirm_password" onChange={formik.handleChange} value={formik.values.confirm_password} />
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