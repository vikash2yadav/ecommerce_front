import React, { useContext, useEffect, useState } from 'react'
import SelectC from '../../components/SelectC'
import InputC from '../../components/InputC'
import { useFormik } from 'formik'
import { addAddressInitialValues, addAddressSchema } from './Schema'
import { Link, useNavigate } from 'react-router-dom'
import { CountryStateCitiesContext } from '../../context/CountryStateCityContext'
import { addMyNewAddress } from '../../apis/customer'
import TextArea from 'antd/es/input/TextArea'

const MyAddressAddNewCompo = () => {
    const navigate = useNavigate();
    const [hideInstruction, setHideInstruction] = useState(false);
    const { countries, getCountryList, cities, getCityList, states, getStateList } = useContext(CountryStateCitiesContext);

    const formik = useFormik({
        initialValues: addAddressInitialValues,
        validationSchema: addAddressSchema,
        onSubmit: async (values) => {
            let data = await addMyNewAddress(values);
            if (data) {
                navigate('/my/account/address');
            }
        }
    })

    const handleSelectChange = (name) => (value) => {
        formik.setFieldValue(name, value);
    };

    useEffect(() => {
        getCountryList()
    }, []);

    useEffect(() => {
        getCityList()
    }, []);

    useEffect(() => {
        getStateList()
    }, []);

    return (
        <>
            <div className='flex flex md:w-full justify-center items-center p-4 mb-10'>
                <div className='md:w-2/4 w-full py-2'>
                    <p className="text-sm mb-5"><Link to="/my/account" className="hover:underline hover:text-red-800">Your Account</Link> >
                        <Link to="/my/account/address" className="hover:underline hover:text-red-800 mx-1">Your Address</Link> >
                        <Link className="text-red-700 hover:underline hover:text-red-800 mx-1">New Address</Link> </p>

                    <h1 className='text-2xl font-bold mb-3 '>Add a new address</h1>

                    <div className='mb-3 border border-solid w-full h-14 bg-teal-300 rounded-xl flex justify-between p-2  items-center'>
                        <p className='text-sm mx-2'>Save time. Autofill your current location.</p>
                        <button className='mx-4 text-sm px-2 py-1 bg-white rounded'>Autofill</button>
                    </div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col w-full'>

                            <p className='text-sm font-semibold mb-1 mt-5'>Country/Region</p>
                            <SelectC name="country_id"
                                onChange={handleSelectChange('country_id')} value={formik.values.country_id} options={countries} />
                            {formik.errors.country_id && formik.touched.country_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.country_id}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Full Name </p>
                            <InputC type="text" name="user_name" onChange={formik.handleChange} value={formik.values.user_name} />
                            {formik.errors.user_name && formik.touched.user_name ? (
                                <div className='text-red-600 text-xs'>{formik.errors.user_name}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
                            <InputC type="text" name="contact_no" onChange={formik.handleChange} value={formik.values.contact_no} />
                            {formik.errors.contact_no && formik.touched.contact_no ? (
                                <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                            ) : null}
                            <p className='text-xs'>May be used to assist delivery</p>

                            <p className='text-sm font-semibold mb-1 mt-5'>Flat, House no., Building, Company, Apartment</p>
                            <InputC type="text" name="street" onChange={formik.handleChange} value={formik.values.street} />
                            {formik.errors.street && formik.touched.street ? (
                                <div className='text-red-600 text-xs'>{formik.errors.street}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Area</p>
                            <InputC type="text" name="area" onChange={formik.handleChange} value={formik.values.area} />
                            {formik.errors.area && formik.touched.area ? (
                                <div className='text-red-600 text-xs'>{formik.errors.area}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Pin Code</p>
                            <InputC type="text" name="pin_code" onChange={formik.handleChange} value={formik.values.pin_code} />
                            {formik.errors.pin_code && formik.touched.pin_code ? (
                                <div className='text-red-600 text-xs'>{formik.errors.pin_code}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>Town/City</p>
                            <SelectC options={cities} name="city_id" onChange={handleSelectChange('city_id')} value={formik.values.city_id} />
                            {formik.errors.city_id && formik.touched.city_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.city_id}</div>
                            ) : null}

                            <p className='text-sm font-semibold mb-1 mt-5'>State</p>
                            <SelectC options={states} name="state_id" onChange={handleSelectChange('state_id')} value={formik.values.state_id} />
                            {formik.errors.state_id && formik.touched.state_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.state_id}</div>
                            ) : null}

                            <div className='flex items-center mt-5 mb-8'>
                                <input type="checkbox" 
                                name="is_default"
                                onChange={formik.handleChange} 
                                checked={formik.values.is_default} />
                                <p className='mx-1 text-sm font-semibold'>Make this my default address</p>
                            </div>

                            <p className='text-sm font-semibold'>Delivery instructions (optional)</p>
                            <Link
                                onClick={() => setHideInstruction(!hideInstruction)}
                                className='text-sm text-blue-800 hover:text-red-800 hover:underline mb-5'>Add preferences, notes, access codes and more</Link>
                            {
                                hideInstruction && (
                                    <>
                                        <p className='text-sm font-semibold mb-1'>Instructions</p>
                                        <TextArea type="text" name="instruction" onChange={formik.handleChange} value={formik.values.instruction} />
                                    </>
                                )
                            }   

                            <button type="submit" className='text-sm bg-yellow-400 shadow-xl md:w-1/4 w-full p-2 mt-5 rounded-xl mb-1.5'>Add address</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MyAddressAddNewCompo