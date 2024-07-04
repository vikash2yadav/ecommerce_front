import React from 'react'
import ReactStars from 'react-stars'
import { Pagination, TablePagination } from '@mui/material'
import { Stack } from '@mui/material'

const OurChoiceContainer = () => {
    return (
        <>
            <div className='p-2'>
                <p className='text-2xl mb-5 font-semibold hover:underline'> Ecommerce's choice </p>
                <div className='flex justify-center flex-wrap items-center'>

                    <a href="" className='hover:-translate-y-3 duration-500 '>
                        <div className='w-52 mx-6 border border-gray-200 p-4 mb-5' >
                            <img className='h-56 w-48' src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
                            <div className='mt-2'>
                                <p className=' text-l font-semibold '>Redmi 12 5g</p>
                                <p className=' text-xs text-gray-600'>This is nice product under 20000</p>
                                <div className='items-left'>
                                    <p className='text-l text-orange-600 mt-2'> &#8377; 2000</p>
                                    <p className='text-xs text-orange-600 mt-2'><ReactStars value={3} /> </p>
                                    <p className='text-xs'> 23 stocks </p>
                                    <p className='text-xs'> 230 reviews </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
              
                  <div className='flex justif-center md:justify-end'>
                  <Stack spacing={2}>
                        {/* <TablePagination
                            component="div"
                            count={100}
                            showFirstButton 
                            showLastButton
                        /> */}
                    <Pagination count={11}  />
                    </Stack>
                    </div>    

            </div>
        </>
    )
}

export default OurChoiceContainer