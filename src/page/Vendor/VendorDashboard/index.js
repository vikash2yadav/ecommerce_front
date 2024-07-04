import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import VendorSidebar from '../../../components/VendorSidebar'
import { OrdersContext } from '../../../context/OrderContext'

const VendorDashboard = () => {
  const { totalVendorOrders } = useContext(OrdersContext);
  return (
    <>
      <div>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sideb  ar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
          </svg>
        </button>
        <VendorSidebar/>

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Link to="/vendor/dashboard/orders" >
                <div className="flex items-center hover:opacity-65 justify-center flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalVendorOrders}</h1>
                  <p className="text-xl ">All Orders</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+3</h1>
                  <p className="text-xl ">Shipped Orders</p>
                  <p className='text-xs'>shipped & not delivered</p>
                </div>
              </Link>

            </div>
            <Link to="/vendor/orders" >
              <div className="flex items-center justify-center hover:opacity-65 h-64 mb-4 rounded bg-gray-300 ">
                <h1 className='text-6xl font-semibold font-serif mb-2'>+8</h1>
                <p className="text-3xl mx-2">Featured products</p>
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <p className="text-3xl font-semibold mb-2">Products F & Q</p>
                  <p className='text-xs'>All product served by you.</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+8</h1>
                  <p className="text-xl mb-2">Featured products</p>
                  <p className='text-xs'>All product served by you.</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+8</h1>
                  <p className="text-xl mb-2">Featured products</p>
                  <p className='text-xs'>All product served by you.</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  rounded flex-col bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+8</h1>
                  <p className="text-xl mb-2">Featured products</p>
                  <p className='text-xs'>All product served by you.</p>
                </div>
              </Link>
            </div>

            <Link to="/vendor/orders" >
              <div className="flex items-center justify-center h-48 hover:opacity-65  mb-4 rounded bg-gray-300 ">
                <h1 className='text-6xl font-semibold font-serif mb-2'>+8</h1>
                <p className="text-3xl mx-2">Featured products</p>
  
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default VendorDashboard