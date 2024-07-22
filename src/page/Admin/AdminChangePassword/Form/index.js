import React, { useContext } from 'react'
import InputC from '../../../../components/InputC'
import { useFormik } from 'formik'
import { adminChangePasswordInitialValue, adminChangePasswordSchema } from '../Schema'
import { changeAdminPassword } from '../../../../apis/admin'
import { CommonsContext } from '../../../../context/CommonContext'
import ButtonC from '../../../../components/ButtonC'

const Form = () => {
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext)

    const formik = useFormik({
        initialValues: adminChangePasswordInitialValue,
        validationSchema: adminChangePasswordSchema,
        onSubmit: async (values, { resetForm }) => {
            let data = await changeAdminPassword(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                })
                resetForm();
            } else {
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

                <div className="flex justify-start items-center" >
                    <ButtonC label="Change Password" type="submit" variant='contained' />
                </div>

            </form>

            <div className='mt-20'>
                <p className='text-m mb-3'> Password Suggestion :</p>
                <div className='flex mb-1'>
                <span className="mx-1 text-xs">&#8594;</span><p className='text-xs text-left mb-2'>  Password should be more than 6 characters.</p>
                </div>

                <div className='flex mb-1'>
                <span className="mx-1 text-xs">&#8594;</span><p className='text-xs mb-2'> Enter strong Password.</p>
                </div>

                 <div className='flex mb-1'>
                <span className="mx-1 text-xs">&#8594;</span><p className='text-xs mb-2'> We suggest you, don`t use space in your password. </p>
                </div>

                  <div className='flex mb-1'>
                <span className="mx-1 text-xs">&#8594;</span><p className='text-xs mb-2'> Use special character in your password.</p>
                </div>
            </div>
        </>
    )
}

export default Form