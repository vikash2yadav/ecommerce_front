import React, { useState } from 'react'

const Navbar = () => {
  const [True, setTrue] = useState(false);

  return (
    <nav className="bg-white border-gray-500 dark:bg-gray-900">

      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        <div>
      <input type="search" className='text-white'>Text</input>
        </div>

        <div className="flex items-start md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" onClick={() => setTrue(true)} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,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" alt="user photo" />
          </button>

          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            {
              True && (
                <>
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </>
              )
            }
          </div>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar