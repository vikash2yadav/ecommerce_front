import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const options = [
    { to:"/vendor/dashboard", title: "Dashboard", d1:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z",  d2:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" },
    { to:"", title: "Inbox", d1:"m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z", notification: true },
    { to:"", title: "All Orders", d1:"M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" },
    { to:"", title: "Chat With Customer", d1:"M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" },
    { to:"", title: "Your Ratings", d1:"M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" },
    { to:"", title: "Log Out", d1:"M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z", logout: true },
]
  return (
    <>
      <div>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sideb  ar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
          </svg>
        </button>
      

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Link to="/vendor/orders" >
                <div className="flex items-center hover:opacity-65 justify-center flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+23</h1>
                  <p className="text-xl ">Not Completed Orders</p>
                  <p className='text-xs'>in complete orders</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+3</h1>
                  <p className="text-xl ">Shipped Orders</p>
                  <p className='text-xs'>shipped & not delivered</p>
                </div>
              </Link>

              <Link to="/vendor/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+39</h1>
                  <p className="text-xl ">Completed Orders</p>
                  <p className='text-xs'>Congratulations, you earned it.</p>
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

export default Dashboard