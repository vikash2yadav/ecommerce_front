import React, { useContext, useEffect, useMemo } from 'react'
import InputC from '../../../../components/InputC'
import SelectC from '../../../../components/SelectC'
import { useFormik } from 'formik'
import { adminProfileUpdateInitialValue, adminProfileUpdateSchema } from '../Schema'
import { updateSelfProfile, getProfile } from '../../../../apis/admin'
import { CommonsContext } from '../../../../context/CommonContext'
import ButtonC from '../../../../components/ButtonC'

const ProfileForm = () => {
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext)

    const handleChange = (name) => (value) => {
        formik.setFieldValue(name, value)
    }

    const formik = useFormik({
        initialValues: adminProfileUpdateInitialValue,
        validationSchema: adminProfileUpdateSchema,
        onSubmit: async (values) => {
            let data = await updateSelfProfile(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data?.data?.message
                })
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data?.data?.message
                })
            }
        }
    })

    const getTokenData = async () => {
        let data = await getProfile();
        if (data?.status === 200) {
            formik.setValues(data?.data?.data);
        } else {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    useEffect(() => {
        getTokenData();
    }, []);

    return (
        <>
            <form action="" className='w-full' onSubmit={formik.handleSubmit}>
                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>First Name</p>
                    <InputC
                        type="text"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange} />
                    {formik.errors.first_name && formik.touched.first_name ? (
                        <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                    ) : null}
                </div>

                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>Last Name</p>
                    <InputC
                        type="text"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange} />
                    {formik.errors.last_name && formik.touched.last_name ? (
                        <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                    ) : null}
                </div>

                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>Email</p>
                    <InputC
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email ? (
                        <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>Birth Date</p>
                    <InputC
                        type="text"
                        name="birth_date"
                        value={formik.values.birth_date}
                        onChange={formik.handleChange} />
                    {formik.errors.birth_date && formik.touched.birth_date ? (
                        <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                    ) : null}
                </div>

                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>Contact Number</p>
                    <InputC name="contact_no" value={formik.values.contact_no} onChange={formik.handleChange} />
                    {formik.errors.contact_no && formik.touched.contact_no ? (
                        <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                    ) : null}
                </div>

                <div className='mb-5'>
                    <p className='text-xs mb-0.5'>Alternate Contact</p>
                    <InputC name="alternative_contact_no" value={formik.values.alternative_contact_no} onChange={formik.handleChange} />
                    {formik.errors.alternative_contact_no && formik.touched.alternative_contact_no ? (
                        <div className='text-red-600 text-xs'>{formik.errors.alternative_contact_no}</div>
                    ) : null}
                </div>

                {/* <div className='mb-5'>
                        <p className='text-xs mb-0.5'>Gender</p>
                        <SelectC options={'genders'} className="w-full" placeholder="Gender" name="gender" value={formik.values.gender} onChange={handleChange('gender')} />
                        {formik.errors.gender && formik.touched.gender ? (
                            <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                        ) : null}
                    </div> */}

                {/* <div className='mb-5'>
                        <p className='text-xs mb-0.5'>Language</p>
                        <SelectC options={'languages'} className="w-full" placeholder="Language" name="language_id" value={formik.values.language_id} onChange={handleChange('language_id')} />
                        {formik.errors.language_id && formik.touched.language_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                        ) : null}
                    </div> */}

                <div className="flex justify-center items-center" >
                    <ButtonC label="Update" type="submit" variant='contained' />
                </div>
            </form>
        </>
    )
}

export default ProfileForm