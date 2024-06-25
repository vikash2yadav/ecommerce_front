import React, { useContext, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/LangContext';
import { common } from '../../languages/common';
import { LoginsContext } from '../../context/LoginContext';
import { CartsContext } from '../../context/CartContext';
import { CustomersContext } from '../../context/CustomerContext';
import { signOut } from '../../apis/customer';
import { CommonsContext } from '../../context/CommonContext';

const Header = () => {

  const navigate = useNavigate();
  let { isLoggedIn, UserLogOut, auth, defaultAdd } = useContext(LoginsContext);
  let { totalCustomerCartItems, setTotalCustomerCartItems, getAllCustomerCartItems } = useContext(CartsContext);
  let { myDefaultAddress, getCustomerDefaultAddress } = useContext(CustomersContext);
  let { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

  const { languages, setLanguages, getAllLanguages } = useContext(LanguageContext);
  const [currentLang, setCurrentLang] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAccountList, setShowAccountList] = useState(false);
  const [showBestSeller, setShowBestSeller] = useState(false);

  let handleSignOut = async () => {
    let data = await signOut();
    if (data.status === 200) {
      setSnackbarAlertOpen(true)
      setSnackbarContent({
        type: 'success',
        message: data?.data?.message
      })
      UserLogOut();
      navigate('/login');
    } else {
      setSnackbarAlertOpen(true)
      setSnackbarContent({
        type: 'error',
        message: data?.data?.message
      })
    }

  }
 
  useEffect(() => {
    getAllLanguages()
  }, [setLanguages])

  useEffect(() => {
    getCustomerDefaultAddress()
  }, [])

  useEffect(() => {
    getAllCustomerCartItems();
  }, [setTotalCustomerCartItems])

  return (
    <>
      <nav className=" border-blue-200 bg-gray-600 ">
        {/* style={{backgroundColor: '#131A22'}} */}
        <div className="max-w-screen-xl  flex flex:wrap items-center justify-between mx-auto p-2 " >
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span> */}
          </Link>
          <Link to="/my/account/address">
            <div className='text-white flex justify-center items-center border rounded-lg cursor-pointer border-transparent hover:border-white p-1'>
              <div className='text-xl'><FaLocationCrosshairs /></div>
              <div className='mx-1'>
                <p className='text-xs text-gray-200'>{currentLang === '' ? '' : ''}
                 
                  <span className='text-xs font-semibold mx-1'>{isLoggedIn && defaultAdd?.city + ',' } {isLoggedIn && defaultAdd?.state + ' - ' }{isLoggedIn && defaultAdd?.pincode}</span>
                </p>
                <p className='font-bold text-l'>Update location</p>
              </div>
            </div>
          </Link>

          <div className=' flex justify-center items-center'>
            <select name="" defaultValue='All' className='p-1 h-8 md:h-10 text-xs rounded-l bg-purple-100 w-6 md:w-14' id="">
              <option value="">All</option>
              <option value="">groccery</option>
            </select>
            <input type="search" placeholder='search here' className='p-1 border-2 border-white h-8 md:h-10 text-sm sm:w-40 w-20 md:w-80' />
            <button className='bg-orange-400 w-6 md:w-10 h-8 md:h-10 flex justify-center items-center hover:bg-orange-500 font-bold text-white rounded-r text-xl md:text-2xl'><IoIosSearch /></button>
          </div>


          <Link to="/my/orders">
            <div className='text-white text-sm flex justify-center items-end  border rounded-lg cursor-pointer border-transparent hover:border-white p-1'>
              <div className='px-1'><p className='text-xs'>Returns</p>
                <p className='text-sm font-bold'>& Orders  </p>
              </div>
            </div>
          </Link>

          <div onMouseEnter={() => setShowAccountList(!showAccountList)}
            onMouseLeave={() => setShowAccountList(!showAccountList)}
            className='text-white text-sm flex justify-center items-end border rounded-lg cursor-pointer border-transparent hover:border-white p-1'>
            <div className='px-1'><p className='text-xs'>Hello, <span>{isLoggedIn ? auth?.last_name : 'user'}</span></p>

              <p className='text-sm font-bold'>Account & lists</p>
            </div>
            <div className='text-gray-200'><FaAngleDown /></div>
          </div>

          <div onMouseEnter={() => setShowAccountList(showAccountList)}
            onMouseLeave={() => setShowAccountList(!showAccountList)}
            className={`z-50 w-64 my-4 ${showAccountList ? 'block' : 'hidden'}  bg-white text-black absolute top-10 right-40 text-base list-none divide-y rounded-lg shadow`} id="user-dropdown">

            <div className="px-4 py-3 flex justify-center items-center flex-col">
              {
                !isLoggedIn && (
                  <>
                    <button className='mb-1 w-48 bg-yellow-400 text-xs font-semibold border hover:underline p-2 rounded-lg' onClick={() => navigate('/login')}> Sign In</button>
                    <p className='text-xs'> New user? <span className='text-xs text-blue-500 hover:underline hover:text-red-500'><Link to="/register">Sign Up</Link></span></p>
                  </>
                )
              }
            </div>

            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to="/my/account" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Account</Link>
              </li>
              <li>
                <Link to="/my/orders" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Orders</Link>
              </li>
              <li>
                <Link to="/my/wishlist" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Wish List</Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Recomendations</Link>
              </li>
            </ul>

          </div>


          <div onClick={() => navigate('/my/cart')} className='text-white flex  border rounded-lg cursor-pointer border-transparent hover:border-white p-1'>
            <div className='text-4xl'><FiShoppingCart /></div>
            <span className='text-xl font-bold pt-4'> {totalCustomerCartItems ? totalCustomerCartItems : 0}  </span>
          </div>

          <button type="button"
            onMouseEnter={() => setShowProfile(!showProfile)}
            onMouseLeave={() => setShowProfile(!showProfile)}
            className="flex text-sm bg-purple-800 rounded-full md:me-0 hover:ring-4 hover:ring-purple-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,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" alt="user photo" />
          </button>

          <div
            onMouseEnter={() => setShowProfile(showProfile)}
            onMouseLeave={() => setShowProfile(!showProfile)}
            className={`z-50 my-4 ${showProfile ? 'block' : 'hidden'} bg-white  absolute top-8 right-1 text-base list-none  divide-y rounded-lg shadow`} id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-black">{isLoggedIn ? auth?.full_name : 'user name'}</span>
              <span className="block text-sm  text-purple-700 truncate">{isLoggedIn ? auth?.email : 'email'}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to="/my/profile" className="block px-4 py-1.5 text-sm hover:underline hover:text-red-700">Your Profile</Link>
              </li>
              <li>
                <Link to="/my/orders" className="block px-4 py-1.5 text-sm hover:underline hover:text-red-700">Your Orders</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-1.5 text-sm hover:underline hover:text-red-700">Settings</Link>
              </li>
              <li>
                <Link onClick={handleSignOut} className="block px-4 py-1.5 text-sm hover:underline hover:text-red-700">Sign out</Link>
              </li>
            </ul>

          </div>
        </div>


        {/* <hr className='h-0.5 mx-auto bg-white max-w-screen-xl'></hr> */}

        <nav className="bg-gray-500 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

              <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <button type="button"
                  onMouseEnter={() => setShowLanguageMenu(!showLanguageMenu)}
                  onMouseLeave={() => setShowLanguageMenu(!showLanguageMenu)}
                  data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-2 mb:px-4 py-1 md:py-2 text-sm text-white border border-gray-500 rounded-lg cursor-pointer hover:border hover:border-white">
                  <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth={300} /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y={420} /><use xlinkHref="#a" y={840} /><use xlinkHref="#a" y={1260} /></g><use xlinkHref="#a" y={1680} /></g><use xlinkHref="#b" x={247} y={210} /></g><use xlinkHref="#c" x={494} /></g><use xlinkHref="#d" x={988} /><use xlinkHref="#c" x={1976} /><use xlinkHref="#e" x={2470} /></g></svg>
                  English (US)
                </button>

                <div
                  onMouseEnter={() => setShowLanguageMenu(showLanguageMenu)}
                  onMouseLeave={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`z-50 ${showLanguageMenu ? 'block' : 'hidden'} rounded-xl absolute top-28 right-1 md:top-24 sm:top-28  my-2 text-base list-none divide-y divide-blue-100 rounded-lg shadow `} id="language-dropdown-menu">
                  <ul className="py-2 bg-white font-sm" role="none">
                    {
                      languages.map((item) => {
                        return (<>
                          <li onClick={() => {
                            localStorage.setItem("lang", item.code);

                          }}>
                            <Link className="block px-4 py-1 text-xs text-black hover:border hover:underline hover:border-gray-600" role="menuitem">
                              <div className="inline-flex items-center ">
                                <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                                {item.name}
                              </div>
                            </Link>
                          </li>

                        </>)

                      })
                    }
                  </ul>

                </div>              </div>
              <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>

            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
              <ul className="flex flex-col font-medium  md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className=' border border-gray-500 hover:border hover:border-white'>
                  <Link to="/" className="block py-1 px-2 text-white " aria-current="page">Home</Link>
                </li>
                <li className=' border border-gray-500 hover:border hover:border-white'>
                  <Link to="/about" className="block py-1 px-2 text-white ">About</Link>
                </li>
                <li className=' border border-gray-500 hover:border hover:border-white'>
                  <Link to="/contact" className="block py-1 px-2 text-white ">Contact</Link>
                </li>

                <li className=' border border-gray-500 hover:border hover:border-white'>
                  <Link to="/our_choice" className="block py-1 px-2 text-white flex items-end">Our choices</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </nav>

      <div
        className={`z-50 transition-all duration-1000 md:w-36 my-4 ${showBestSeller ? 'block' : 'hidden'}  bg-white text-black absolute top-20 left-40 text-base list-none divide-y  shadow`} id="user-dropdown">

        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <p className="block px-4 py-1 text-m font-semibold">Best Sellers</p>
          </li>
          <li>
            <Link to="" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Orders</Link>
          </li>
          <li>
            <Link to="" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Wish List</Link>
          </li>
          <li>
            <Link to="" className="block px-4 py-0.5 text-sm hover:underline hover:text-red-700">Your Recomendations</Link>
          </li>
        </ul>

      </div>

    </>
  )
}

export default Header