import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { MdContentCopy } from "react-icons/md";

const Coupons = () => {
  let coupons = [
    { name: "10% off", description: "enjoy your shopping", code: '1scD&#e!JdNbxdl', expired: 1, expired_time: '2029-08-29' },
    { name: "10% off", description: "enjoy your shopping", code: '1scD&#e!JdNbxdl', expired: 0, expired_time: '2029-08-29' },
  ]


  return (
    <>
      <Header />
      <h1 className='text-3xl mb-8 p-2 '>Your Coupons</h1>
      <div className='mt-5 w-full flex-wrap flex justify-evenly mb-20'>


        {
          coupons.map((item) => {
            return (
              <>
                <div className='md:w-80 hover:bg-gray-100 p-2 w-full h-48 border-2 flex flex-col p-4 border-gray-200 mb-6 rounded-xl'>
                  <h1 className='text-semibold text-2xl '>{item.name}</h1>
                  <p className='text-sm  mb-3'>{item.description}</p>
                  <div className='flex  items-center'>
                    <p className='text-xl'>{item?.code} </p>
                    <MdContentCopy className='mx-4 hover:cursor-pointer' />
                  </div>
                  <p className='text-sm mt-3 mb-3 '>{item?.expired === 1 ?
                    (<p className='text-red-500 font-semibold'>Expired</p>) :
                    (<p className='text-green-500 font-semibold'>Active</p>)
                  }</p>
                  <p className='text-sm'>Expired Date : {item?.expired_time}</p>
                </div>
              </>
            )
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default Coupons