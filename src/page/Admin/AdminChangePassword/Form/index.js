import React, { useContext } from 'react'
import InputC from '../../../../components/InputC'
import { useFormik } from 'formik'
import { adminChangePasswordInitialValue, adminChangePasswordSchema } from '../Schema'
import {changeAdminPassword} from '../../../../apis/admin'
import { CommonsContext } from '../../../../context/CommonContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

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
            <form action="" className='w-full' onSubmit={formik.handleSubmit}>
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

                
               <Button type="submit" variant='contained' type='primary' >
                    Change Password
                </Button>
              
            </form>
        </>
    )
}

export default Form