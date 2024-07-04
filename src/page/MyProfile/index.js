import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InputC from '../../components/InputC';
import SelectC from '../../components/SelectC';
import { useFormik } from 'formik';
import { myProfileSchema } from './Schema';
import { updateMyProfile } from '../../apis/customer';
import { LanguageContext } from '../../context/LangContext';
import { CommonsContext } from '../../context/CommonContext';
import { CustomersContext } from '../../context/CustomerContext';
import { LoginsContext } from '../../context/LoginContext';
import DatePickerC from '../../components/DatePickerC';

const MyProfile = () => {
    const { setUserData } = useContext(LoginsContext);
    const { languages, getAllLanguages } = useContext(LanguageContext);
    const { getCustomerProfileInfo, customerProfileInfo } = useContext(CustomersContext);
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const genders = [
        { id: 1, name: 'Men', value: 'men' },
        { id: 2, name: 'Women', value: 'women' },
        { id: 3, name: 'Others', value: 'others' },
    ];

    const formik = useFormik({
        initialValues: {
            first_name: customerProfileInfo?.first_name || '',
            last_name: customerProfileInfo?.last_name || '',
            email: customerProfileInfo?.email || '',
            country_code: customerProfileInfo?.country_code || '',
            contact_no: customerProfileInfo?.contact_no || '',
            alternative_country_code: customerProfileInfo?.alternative_country_code || '',
            alternative_contact_no: customerProfileInfo?.alternative_contact_no || '',
            birth_date: customerProfileInfo?.birth_date || '',
            gender: customerProfileInfo?.gender || '',
            language_id: customerProfileInfo?.language_id || '',
        },
        enableReinitialize: true,
        validationSchema: myProfileSchema,
        onSubmit: async (values) => {
            try {
                const data = await updateMyProfile(values);
                setSnackbarAlertOpen(true);
                if (data.status === 200) {
                    setSnackbarContent({
                        type: 'success',
                        message: data?.data?.message,
                    });
                    const updatedUserData = {
                        ...JSON.parse(localStorage.getItem('userData')),
                        ...data.data.data,
                    };
                    localStorage.setItem('userData', JSON.stringify(updatedUserData));
                    setUserData(updatedUserData);
                } else {
                    setSnackbarContent({
                        type: 'error',
                        message: data?.data?.message,
                    });
                }
            } catch (error) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: 'An error occurred while updating your profile.',
                });
            }
        },
    });

    const handleSelectChange = (name) => (value) => {
        formik.setFieldValue(name, value);
    };

    const handleDateChange = (name, dateString) => {
        formik.setFieldValue(name, dateString);
    };

    useEffect(() => {
        getAllLanguages();
    }, []); // Dependency array is empty to run this effect only once

    useEffect(() => {
        getCustomerProfileInfo();
    }, []); // Dependency array is empty to run this effect only once

    const formFields = [
        { label: 'First Name', name: 'first_name', type: 'text' },
        { label: 'Last Name', name: 'last_name', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Mobile Number', name: 'contact_no', type: 'tel' },
        { label: 'Alternate Mobile Number', name: 'alternative_contact_no', type: 'tel' },
    ];

    return (
        <>
            <Header />
            <div className='flex flex md:w-full justify-center items-center p-4'>
                <div className='md:w-2/4 w-full py-4'>
                    <h1 className='text-2xl font-bold mb-3'>Your profile</h1>
                    <div className='mb-3 border border-solid w-full h-8 bg-teal-300 rounded-xl flex justify-between p-2 items-center'>
                        <p className='text-sm mx-2'>You can change your profile here...</p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col w-full'>
                            {formFields.map(({ label, name, type }) => (
                                <div key={name}>
                                    <p className='text-sm font-semibold mb-1 mt-5'>{label}</p>
                                    <InputC value={formik.values[name]} type={type} name={name} onChange={formik.handleChange} />
                                    {formik.errors[name] && formik.touched[name] && (
                                        <div className='text-red-600 text-xs'>{formik.errors[name]}</div>
                                    )}
                                </div>
                            ))}

                            <p className='text-sm font-semibold mb-1 mt-5'>Birth date</p>
                            <DatePickerC value={formik.values.birth_date} name='birth_date' onChange={handleDateChange} />
                            {formik.errors.birth_date && formik.touched.birth_date && (
                                <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                            )}

                            <p className='text-sm font-semibold mb-1 mt-5'>Gender</p>
                            <SelectC name='gender' options={genders} value={formik.values.gender} onChange={handleSelectChange('gender')} />
                            {formik.errors.gender && formik.touched.gender && (
                                <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                            )}

                            <p className='text-sm font-semibold mb-1 mt-5'>Language Priority</p>
                            <SelectC options={languages} name='language_id' value={formik.values.language_id} onChange={handleSelectChange('language_id')} />
                            {formik.errors.language_id && formik.touched.language_id && (
                                <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                            )}

                            <button className='text-sm bg-yellow-400 shadow-xl md:w-1/4 w-full p-2 mt-5 rounded-xl mb-1.5'>Update profile</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyProfile;
