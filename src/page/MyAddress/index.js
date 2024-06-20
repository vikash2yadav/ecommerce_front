import React, { useContext, useEffect, useMemo, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MyAddressCompo from '../../components/MyAddressCompo'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { CustomersContext } from '../../context/CustomerContext';
import { CommonsContext } from '../../context/CommonContext';
import { changeDefaultAddress } from '../../apis/user';
import { deleteMyAddress, updateMyAddress } from '../../apis/customer';
import { Modal } from 'antd';
import InputC from '../../components/InputC'
import SelectC from '../../components/SelectC'
import { useFormik } from 'formik'
import { updateAddressSchema } from './Schema';
import { CountryStateCitiesContext } from '../../context/CountryStateCityContext'

const MyAddress = () => {
  const [addressData, setAddressData] = useState({});

  let { formIsEdit, setFormIsEdit } = useContext(CommonsContext)
  let { myAddressList, setMyAddressList, getAllMyAddresses, getCustomerDefaultAddress } = useContext(CustomersContext);
  const { countries, getCountryList, cities, getCityList, states, getStateList } = useContext(CountryStateCitiesContext);

  const formik = useFormik({
    initialValues: {
      id: addressData?.id,
      country_id: addressData?.country_id || '',
      user_name: addressData?.user_name || '',
      contact_no: addressData?.contact_no || '',
      street: addressData?.street || '',
      area: addressData?.area || '',
      pin_code: addressData?.pin_code,
      city_id: addressData?.city_id || '',
      state_id: addressData?.state_id || '',
      instruction: addressData?.instruction || ''
    },
    enableReinitialize: true,
    validationSchema: updateAddressSchema,
    onSubmit: async (values) => {

      let data = await updateMyAddress(values);
      if (data.status === 200) {
        setFormIsEdit(false);
        getAllMyAddresses();
      } else {
        alert(data.data.message);
      }
    }
  })

  let handleDefaultAddressChange = async (id) => {
    let data = await changeDefaultAddress(id);
    getAllMyAddresses();
    getCustomerDefaultAddress();
  }

  let handleDeleteAddress = async (id) => {
    let data = await deleteMyAddress(id);
    getAllMyAddresses();
    getCustomerDefaultAddress();
  }

  let handleEditAddress = async (item) => {
    setFormIsEdit(true);
    setAddressData(item);
  }

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

  useEffect(() => {
    getAllMyAddresses()
  }, [setMyAddressList]);

  return (
    <>
      <Header />
      <div className='p-2 flex flex-col md:px-40 px-4 md:mb-10 w-full'>

        <p className="text-sm mb-5 "><Link to="/my/account" className=" hover:underline hover:text-red-800">Your Account</Link> >
          <Link className="text-red-700 hover:underline hover:text-red-800 mx-1">Your Address</Link> </p>

        <h1 className='text-2xl mb-5'>Your Addresses</h1>

        <div className='mt-5 w-full flex-wrap flex justify-around mb-5'>

          <Link to="add_new"> <div className=' border-dashed md:w-80 w-full h-60 border-2 flex flex-col justify-center items-center border-gray-300 mb-6 rounded-xl'>
            <FaPlus className="text-5xl text-gray-300" />
            <h1 className='text-2xl font-bold text-gray-500'>Add address</h1>
          </div></Link>

          {
            myAddressList && myAddressList.map((item) => {
              return (
                <>
                  <MyAddressCompo
                    handleEditAddress={handleEditAddress}
                    handleDeleteAddress={handleDeleteAddress}
                    handleDefaultAddressChange={() => handleDefaultAddressChange(item?.id)}
                    item={item} />
                </>
              )
            })
          }
        </div>

      </div>
      <Modal
        open={formIsEdit}
        onCancel={() => setFormIsEdit(false)}
        footer={null}
      >
        <form action="" onSubmit={formik.handleSubmit}>
          <p className='text-xl font-semibold text-gray-500 mb-8'>Update Address</p>

          <p className='text-sm font-semibold mb-1 mt-5'>Country/Region</p>
          <SelectC name="country_id" className="w-full" options={countries}
              onChange={handleSelectChange('country_id')}
            value={formik.values.country_id} />
          {formik.errors.country_id && formik.touched.country_id ? (
            <div className='text-red-600 text-xs'>{formik.errors.country_id}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>Full Name</p>
          <InputC
            value={formik.values.user_name}
            type="text" name="user_name"
            onChange={formik.handleChange}
          />
          {formik.errors.user_name && formik.touched.user_name ? (
            <div className='text-red-600 text-xs'>{formik.errors.user_name}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'> Mobile Number</p>
          <InputC type="text" name="contact_no" onChange={formik.handleChange} value={formik.values.contact_no} />
          {formik.errors.contact_no && formik.touched.contact_no ? (
            <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>Flat, House no., Building, Company, Apartment</p>
          <InputC
            value={formik.values.street}
            type="text" name="street"
            onChange={formik.handleChange}
          />
          {formik.errors.street && formik.touched.street ? (
            <div className='text-red-600 text-xs'>{formik.errors.street}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>Area</p>
          <InputC type="text" name="area" onChange={formik.handleChange} value={formik.values.area} />
          {formik.errors.area && formik.touched.area ? (
            <div className='text-red-600 text-xs'>{formik.errors.area}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>Pin Code</p>
          <InputC type="text" name="pin_code" value={formik.values.pin_code} />
          {formik.errors.pin_code && formik.touched.pin_code ? (
            <div className='text-red-600 text-xs'>{formik.errors.pin_code}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>Town/City</p>
          <SelectC className="w-full" name="city_id" value={formik.values.city_id} options={cities}
              onChange={handleSelectChange('city_id')} />
          {formik.errors.city_id && formik.touched.city_id ? (
            <div className='text-red-600 text-xs'>{formik.errors.city_id}</div>
          ) : null}

          <p className='text-sm font-semibold mb-1 mt-5'>State</p>
          <SelectC className="w-full" name="state_id" value={formik.values.state_id} options={states}
              onChange={handleSelectChange('state_id')} />
          {formik.errors.state_id && formik.touched.state_id ? (
            <div className='text-red-600 text-xs'>{formik.errors.state_id}</div>
          ) : null}

          <div className='flex justify-center mt-3'>
            <Link onClick={()=>setFormIsEdit(false)} className='text-sm text-center bg-white md:w-28 border border-gray-300  p-2 mt-5 rounded-xl mb-1.5'>Cancel</Link>
            <button type="Submit" className='mx-1 text-sm bg-yellow-400 md:w-28 p-2 mt-5 rounded-xl mb-1.5'>Update</button>
          </div>
        </form>
      </Modal>

      <Footer />
    </>
  )
}

export default MyAddress  