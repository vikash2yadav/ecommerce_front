import React from 'react'
import { Link } from 'react-router-dom'

const BestSellers = (props) => {
  return (
    <div>
            <div className=' p-4 mb-5 w-full' style={{border:'25px solid rgb(229 231 235 )'}} >
   <p className='text-2xl mb-5 font-semibold'>{props.title}<span className='text-sm text-roboto hover:underline itms-center text-blue-500 mx-1'><Link to={props.more}>see more</Link></span></p> 
   
   <div className='flex justify-center flex-wrap items-center h-64 overflow-x-auto'>

   <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 12 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>

    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 13 C 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>

    </a>
    </div>

    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 12 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>
    
    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 13 C 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>
    
    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/41Q+oC53k+L._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 12 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>
    
  
    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 13 C 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>
    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 13 C 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>

    <div className='w-36 py-4 mx-6'> 
   <a href="" className='hover:underline'>
    <img className='h-48 w-full' src="https://m.media-amazon.com/images/I/4180tJsogaL._AC_SY400_.jpg" alt="" />
    <p className='text-center text-sm font-semibold '>Redmi 13 C 5g</p>
    <p className='text-center text-xs  text-gray-500'>This is nice product under 20000</p>
    </a>
    </div>

    </div>
    </div>
    </div>
  )
}

export default BestSellers