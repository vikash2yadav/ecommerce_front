import React, { useContext } from 'react'
import InputC from '../../../../components/InputC'
import ButtonC from '../../../../components/ButtonC'
import { useFormik } from 'formik'
import { adminChangePasswordInitialValue, adminChangePasswordSchema } from '../Schema'
import {changeAdminPassword} from '../../../../apis/admin'
import { CommonsContext } from '../../../../context/CommonContext'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext)

    const formik = useFormik({
        initialValues: adminChangePasswordInitialValue,
        validationSchema: adminChangePasswordSchema,
        onSubmit: async (values) => {
            let data = await changeAdminPassword(values);
            if(data?.status === 200){
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                })
                navigate("/admin/dashboard");
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
            <form action="" className='w-80' onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <InputC placeholder="Current Password"
                    type="password"
                     name="old_password" 
                     value={formik.values.old_password} 
                     onChange={formik.handleChange} />
                    {formik.errors.old_password && formik.touched.old_password ? (
                        <div className='text-red-600 text-xs'>{formik.errors.old_password}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                    <InputC placeholder="New Password" 
                    type="password"
                    name="new_password" 
                    value={formik.values.new_password} 
                    onChange={formik.handleChange} />
                    {formik.errors.new_password && formik.touched.new_password ? (
                        <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                    <InputC placeholder="Confirm Password" 
                    type="password"
                    name="confirm_password" 
                    value={formik.values.confirm_password} 
                    onChange={formik.handleChange} />
                    {formik.errors.confirm_password && formik.touched.confirm_password ? (
                        <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                    ) : null}
                </div>

                <ButtonC type="submit" variant='contained' color='secondary' className='' label="Change password" />
            </form>
        </>
    )
}

export default Form