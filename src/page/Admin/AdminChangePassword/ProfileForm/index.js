import React, { useContext } from 'react'
import InputC from '../../../../components/InputC'
import SelectC from '../../../../components/SelectC'
import { useFormik } from 'formik'
import { adminChangePasswordInitialValue, adminChangePasswordSchema } from '../Schema'
import { changeAdminPassword } from '../../../../apis/admin'
import { CommonsContext } from '../../../../context/CommonContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const ProfileForm = () => {
    const navigate = useNavigate();
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext)

    const handleChange = (name) => (value) => {
        formik.setFieldValue(name, value)
    }
    
    const formik = useFormik({
        initialValues: adminChangePasswordInitialValue,
        validationSchema: adminChangePasswordSchema,
        onSubmit: async (values) => {
            let data = await changeAdminPassword(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                })
                navigate("/admin/dashboard");
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
            <form action="" className='w-full' onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <InputC placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange} />
                    {formik.errors.first_name && formik.touched.first_name ? (
                        <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                    <InputC placeholder="Last name"
                        type="text"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange} />
                    {formik.errors.last_name && formik.touched.last_name ? (
                        <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                    <InputC placeholder="Email"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email ? (
                        <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                    <InputC placeholder="Birth Date"
                        type="text"
                        name="birth_date"
                        value={formik.values.birth_date}
                        onChange={formik.handleChange} />
                    {formik.errors.birth_date && formik.touched.birth_date ? (
                        <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                    ) : null}
                </div>

                <div className='mb-3'>
                        <p className='text-sm'>Contact </p>
                        <InputC name="contact_no" value={formik.values.contact_no} onChange={formik.handleChange} />
                        {formik.errors.contact_no && formik.touched.contact_no ? (
                            <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <p className='text-sm'>Alternate Contact</p>
                        <InputC name="alternative_contact_no" value={formik.values.alternative_contact_no} onChange={formik.handleChange} />
                        {formik.errors.alternative_contact_no && formik.touched.alternative_contact_no ? (
                            <div className='text-red-600 text-xs'>{formik.errors.alternative_contact_no}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <p className='text-sm'>Gender</p>
                        <SelectC options={'genders'} className="w-full" placeholder="Gender" name="gender" value={formik.values.gender} onChange={handleChange('gender')} />
                        {formik.errors.gender && formik.touched.gender ? (
                            <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <p className='text-sm'>Language</p>
                        <SelectC options={'languages'} className="w-full" placeholder="Language" name="language_id" value={formik.values.language_id} onChange={handleChange('language_id')} />
                        {formik.errors.language_id && formik.touched.language_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                        ) : null}
                    </div>

               <div className="flex justify-center items-center" >
               <Button type="submit" variant='contained' type='primary' >
                    Update Profile
                </Button>
               </div>
            </form>
        </>
    )
}

export default ProfileForm