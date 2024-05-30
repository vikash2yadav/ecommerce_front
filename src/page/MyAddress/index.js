import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MyAddressCompo from '../../components/MyAddressCompo'
import { FaPlus } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const MyAddress = () => {
  return (
    <>
      <Header />
      <div className='p-2 flex flex-col md:px-40 px-4 w-full'>

        <p className="text-sm mb-5 "><a href="" className=" hover:underline hover:text-red-800">Your Account</a> >
          <a href="" className="text-red-700 hover:underline hover:text-red-800 mx-1">Your Address</a> </p>

        <h1 className='text-2xl mb-5'>Your Addresses</h1>

        <div className='mt-5 w-full flex-wrap flex justify-around mb-5'>

         <Link to="add_new"> <div className=' border-dashed md:w-80 w-full h-60 border-2 flex flex-col justify-center items-center border-gray-300 mb-6 rounded-xl'>
            <FaPlus className="text-5xl text-gray-300" />
            <h1 className='text-2xl font-bold text-gray-500'>Add address</h1>
          </div></Link>

          <MyAddressCompo name="yadav Vikash" address="Ahmedabad, Gujarat-380026" city="Ahmedabad" number="192839384" />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default MyAddress