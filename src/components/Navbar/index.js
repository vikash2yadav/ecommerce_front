import React, { useState } from 'react'

const Navbar = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showToggleMenu, setShowToggleMenu] = useState(false);

  const handleToggleLanguage = (showLanguageMenu) => {
    setShowLanguageMenu(!showLanguageMenu)
  };
  const handleToggleManu = (showToggleMenu) => {
    setShowToggleMenu(!showToggleMenu)
  }
  return (
    <>
      <nav className=" border-blue-200 bg-purple-500">
        <div className="max-w-screen-xl flex flex:wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap blue:text-white"></span>
          </a>

          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={() => handleToggleLanguage(showLanguageMenu)} data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-2 mb:px-4 py-1 md:py-2 text-sm text-white rounded-lg cursor-pointer hover:text-purple-700 hover:bg-gray-100">
              <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth={300} /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y={420} /><use xlinkHref="#a" y={840} /><use xlinkHref="#a" y={1260} /></g><use xlinkHref="#a" y={1680} /></g><use xlinkHref="#b" x={247} y={210} /></g><use xlinkHref="#c" x={494} /></g><use xlinkHref="#d" x={988} /><use xlinkHref="#c" x={1976} /><use xlinkHref="#e" x={2470} /></g></svg>
              English (US)
            </button>

            <div className={`z-50 ${showLanguageMenu ? 'block' : 'hidden'} absolute top-16 md:top-14 sm:top-20  my-4 text-base list-none divide-y divide-blue-100 rounded-lg shadow `} id="language-dropdown-menu">
              <ul className="py-2 bg-gray-100 text-purple-700 font-medium" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-700 hover:text-white text-sm text-blue-700 hover:bg-blue-100 blue:text-blue-400 blue:hover:bg-blue-600 blue:hover:text-white" role="menuitem">
                    <div className="inline-flex items-center ">
                      <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                      English (US)
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2  hover:bg-purple-700 hover:text-white text-sm text-blue-700 hover:bg-blue-100 blue:text-blue-400 blue:hover:bg-blue-600 blue:hover:text-white" role="menuitem">
                    <div className="inline-flex items-center ">
                      <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2  hover:bg-purple-700 hover:text-white text-sm text-blue-700 hover:bg-blue-100 blue:text-blue-400 blue:hover:bg-blue-600 blue:hover:text-white" role="menuitem">
                    <div className="inline-flex items-center ">
                      <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fillRule="evenodd" strokeWidth="1pt"><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#009246" d="M0 0h170.7v512H0z" /><path fill="#ce2b37" d="M341.3 0H512v512H341.3z" /></g></svg>
                      Italiano
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2  hover:bg-purple-700 hover:text-white text-sm text-blue-700 hover:bg-blue-100 blue:text-blue-400 blue:hover:bg-blue-600 blue:hover:text-white" role="menuitem">
                    <div className="inline-flex items-center ">
                      <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" /></defs><path fill="#de2910" d="M0 0h512v512H0z" /><use width={30} height={20} transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a" /><use width={30} height={20} transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a" /><use width={30} height={20} transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a" /></svg>
                      中文 (繁體)
                    </div>
                  </a>
                </li>
              </ul>
            </div>


            <button data-collapse-toggle="navbar-language" type="button" onClick={() => handleToggleManu(showToggleMenu)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 blue:text-blue-400 blue:hover:bg-blue-700 blue:focus:ring-blue-600" aria-controls="navbar-language" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>


          </div>
          {/* <div className={`items-center hidden justify-between w-full md:flex md:w-auto md:order-1`} >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-blue-100 rounded-lg bg-blue-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white blue:bg-blue-800 md:blue:bg-blue-900 blue:border-blue-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:blue:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 blue:text-white md:blue:hover:text-blue-500 blue:hover:bg-blue-700 blue:hover:text-white md:blue:hover:bg-transparent blue:border-blue-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 blue:text-white md:blue:hover:text-blue-500 blue:hover:bg-blue-700 blue:hover:text-white md:blue:hover:bg-transparent blue:border-blue-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 blue:text-white md:blue:hover:text-blue-500 blue:hover:bg-blue-700 blue:hover:text-white md:blue:hover:bg-transparent blue:border-blue-700">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 blue:text-white md:blue:hover:text-blue-500 blue:hover:bg-blue-700 blue:hover:text-white md:blue:hover:bg-transparent blue:border-blue-700">Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>



    </>
  )
}

export default Navbar

