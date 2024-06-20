import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputC from '../../components/InputC'
import SelectC from '../../components/SelectC'
import { useFormik } from 'formik'
import { myProfileInitialValues, myProfileSchema } from './Schema'
import { addMyNewAddress } from '../../apis/customer'

const MyProfile = () => {
        let languages = [
        {
            name: "button"
        }
    ]
    const formik = useFormik({
        initialValues: myProfileInitialValues,
        validationSchema: myProfileSchema,
        onSubmit: async (values) => {
            let data = await addMyNewAddress(values);
            if (data.status === 200) {
                alert(data.data.data.message)
            } else {
                alert(data.data.message)
            }
        }
    })

    return (
        <>
            <Header />
            <div className='flex flex md:w-full justify-center items-center p-4 '>
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
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
                            <InputC value={formik.values.contact_no} type="tel" name="contact_no" onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number country code</p>
                            <SelectC />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Alternate Mobile Number</p>
                            <InputC value={formik.values.alternative_contact_no} type="tel" name="alternative_contact_no" onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Birth date</p>
                            <InputC value={formik.values.birth_date} type="text" name="birth_date" onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Gender</p>
                            <SelectC />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Language Priority</p>
                            <SelectC options={languages} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
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