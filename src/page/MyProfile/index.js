import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputC from '../../components/InputC'
import SelectC from '../../components/SelectC'
import { useFormik } from 'formik'
import { myProfileSchema } from './Schema'
import { updateMyProfile } from '../../apis/customer'
import { LanguageContext } from '../../context/LangContext';
import { CommonsContext } from '../../context/CommonContext';
import { CustomersContext } from '../../context/CustomerContext'
import { LoginsContext } from '../../context/LoginContext'

const MyProfile = () => {
    let {auth} = useContext(LoginsContext)
    let { languages, setLanguages, getAllLanguages,  } = useContext(LanguageContext);
    let { getCustomerProfileInfo, setCustomerProfileInfo, customerProfileInfo } = useContext(CustomersContext)
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    
    // let genders = [
    //     { name: 'Men', value: 'men' },
    //     { name: 'Women', value: 'women' },
    //     { name: 'Others', value: 'other' }
    // ];

    const formik = useFormik({
        initialValues: {
            first_name: customerProfileInfo?.first_name,
            last_name: customerProfileInfo?.last_name,
            email: customerProfileInfo?.email,
            country_code: customerProfileInfo?.country_code,
            contact_no: customerProfileInfo?.contact_no,
            alternative_country_code: customerProfileInfo?.alternative_country_code,
            alternative_contact_no: customerProfileInfo?.alternative_contact_no,
            birth_date: customerProfileInfo?.birth_date,
            gender: customerProfileInfo?.gender,
            language_id: customerProfileInfo?.language_id
        },
        enableReinitialize: true,
        validationSchema: myProfileSchema,
        onSubmit: async (values) => {
            let data = await updateMyProfile(values);
            if (data.status === 200) {
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

    const handleSelectChange = (name) => (value) => {
        formik.setFieldValue(name, value);
      };

    useEffect(() => {
        getAllLanguages();
    }, [setLanguages]);

    useEffect(() => {
        getCustomerProfileInfo()
      }, []);

    return (
        <>
            <Header />
            <div className='flex flex md:w-full justify-center items-center p-4'>
                <div className='md:w-2/4 w-full py-4'>
                    <h1 className='text-2xl font-bold mb-3 '>Your profile</h1>

                    <div className='mb-3 border border-solid w-full h-8 bg-teal-300 rounded-xl flex justify-between p-2  items-center'>
                        <p className='text-sm mx-2'>you can change your profile here...</p>
                    </div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col w-full'>

                            <p className='text-sm font-semibold mb-1 mt-5'>First Name</p>
                            <InputC value={formik.values.first_name} type="text" name="first_name" onChange={formik.handleChange} />
                            {formik.errors.first_name && formik.touched.first_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Last Name</p>
                            <InputC value={formik.values.last_name} type="text" name="last_name" onChange={formik.handleChange} />
                            {formik.errors.last_name && formik.touched.last_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Email</p>
                            <InputC value={formik.values.email} type="email" name="email" onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Mobile Number country code</p>
                            <SelectC />
                            {formik.errors.country_code && formik.touched.country_code ? (
                                <div className='text-red-600 text-xs'>{formik.errors.country_code}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
                            <InputC value={formik.values.contact_no} type="tel" name="contact_no" onChange={formik.handleChange} />
                            {formik.errors.contact_no && formik.touched.contact_no ? (
                                <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number country code</p>
                            <SelectC />
                            {formik.errors.alternative_country_code && formik.touched.alternative_country_code ? (
                                <div className='text-red-600 text-xs'>{formik.errors.alternative_country_code}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number</p>
                            <InputC value={formik.values.alternative_contact_no} type="tel" name="alternative_contact_no" onChange={formik.handleChange} />
                            {formik.errors.alternative_contact_no && formik.touched.alternative_contact_no ? (
                                <div className='text-red-600 text-xs'>{formik.errors.alternative_contact_no}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Birth date</p>
                            <InputC value={formik.values.birth_date} type="text" name="birth_date" onChange={formik.handleChange} />
                            {formik.errors.birth_date && formik.touched.birth_date ? (
                                <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Gender</p>
                            <SelectC name="gender" value={formik.values.gender} 
                            onChange={handleSelectChange('gender')} />
                            {formik.errors.gender && formik.touched.gender ? (
                                <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Language Priority</p>
                            <SelectC options={languages} name="language_id" value={formik.values.language_id}
                            onChange={handleSelectChange('language_id')} />
                            {formik.errors.language_id && formik.touched.language_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                            ) : null}

                            <button className='text-sm bg-yellow-400 shadow-xl md:w-1/4 w-full p-2 mt-5 rounded-xl mb-1.5'>Update profile</button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyProfile