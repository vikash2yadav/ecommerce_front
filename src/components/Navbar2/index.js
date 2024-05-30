// import React, { useState } from 'react'

// const Navbar2 = () => {
//   const [True, setTrue] = useState(false)
//   return (
//     <>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="logo" />
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ecommerce App</span>
//           </a>

//           <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

//             <button type="button" onClick={() => setTrue(true)} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
//               <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,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" alt="user photo" />
//             </button>

//             <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//                 <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//               </div>
//               <ul className="py-2" aria-labelledby="user-menu-button">
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//                 </li>
//               </ul>

//             </div>

//             <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
//               </svg>
//             </button>

//           </div>
//           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>



//     </>
//   )
// }

// export default Navbar2




import React, { useState } from 'react'

const Navbar2 = () => {
  const [True, setTrue] = useState(false)
  return (
    <>
      <nav className="bg-purple-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button type="button" onClick={() => setTrue(true)} className="flex text-sm bg-purple-800 rounded-full md:me-0 focus:ring-4 focus:ring-purple-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABEEAABAwMBBQUFBQQGCwAAAAABAAIDBAURBhIhMUFRByJhcYETFDKRoTNCUrHBFSNyskNkgsLh8BYkJTU2RFNiY3OS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEEBQMCBv/EACgRAAIBAwMDAwUBAAAAAAAAAAABAgMREgQhMSJBURNhsQUyNYGhFP/aAAwDAQACEQMRAD8A7iiIgCIiAKhIwvD5QOHFWXPc7iUBedKB4qxUVsdPG6WV7I428XvdgBUUZ1trCDSLbfJUU7qhlVK5jmxuAe0AZ2gDx4gcRxCA39HeKKuOKKupZz0ila4/IFZZkeOJ+i492lR6bv2lGaqsskLauKojZ7WJuw95JwWvHEOHEHju6LV6F7S62ilZa77VGSkkGxFWyd59O48C78TOvMdennLc9YndRK5ehN+IfJcytnanDTXWe0atpmUVTBKYnVVPl0Dj1IOS0HjzGOa6LG9ksbJI3Nex4y1zTkOHUFTdEWMxr2u4Felhq4yUjcd4UkGQi8tcHBekAREQBERAEREAViSTJw3gkr9+y31VpAVVERAW6mohpKaWpqZGxQQsL5JHnAa0DJJXzfr3U8mqr++rbtNoof3dJGRghnNx8XHf8hyUu7Z9UyVFf/o5RSH3en71Zs/0jzvDD4AYPmR0XPrVZLnd3EW6jkmaCA6QYa0f2juXKcjrTg3wYGTgjJwTnGd2d+/6n5lW3/EVOqfs0ur2A1FXSQn8I2n4/JUm7NqxriBcackf+M71w9aF+Sx/nqvsQYuLjkkk9Sd5XRuyHWUtruMNhuEubfVP2acvP2Ep4AdGuPLqfEqOXDQ17owXxQR1bBv/AHD8u/8Ak4Pyyo5Kx8b3Rva+ORvEEbLmn9CusJp8M5zpyj9yPrs8cKi1GkruL9pu33PI254QZMfjG531BW3XcrFQS05CyI3hwWMqg4OUBlovEbtoL2gCIiAK3K/ZarixZDtO8EB580REAVRx38FRVHFAfPtg0/JqrUdzuVx2/cxWSOk349q4uJ2AemOPouo08MVNCyCmiZFEwYYyNuyGjoAta+ez6XH7PqK6ngd7WRzWOd3nlzyeA3nivQ1DbSM+1mx1FJLj+VZNZznL2NqhGEIm0WHP9qVahvtpnmEMdwp/anhG5+y4+hwV4r66jpS6Spq4Io/xyStAXHF+C1GcfJcWg1VpmmvtO57QyKuaP3c2Pixwa7qPyWb+3badzKh0njFDI8fMNXk6jtEbg2etZCScD27HRfzAL1FVIu6R5m6c1aTRn9iUkzdK1dDUNcySjr5I9h3FuQ1xHzLl0FR/R1LFDBXVERGaqcSOxzIY0Z9QApAtenLKKZg1Y4TcQiIvZzPbHbJHRZI3rDWRC7LcHiEBcREQHmQ4YSsVXpzuAVlAEREAWJdKh1LRSSs+LgPM81lrGuNOaqiliB7zm93zHBeal8XY6UrZq/BzmuooHawtNzlaHTzxTROe/wC88AObjxx7RSPLjvyVr7hbRXUrInvfBPBKJIZQO9FI3njpvII5gle2NumzsmWi2uG2InnPjs7X6rHbbSu9zbSUW7LY12tKSCtsU1PJBFJUTObFAXsDi17iACPLefJR2g0nQaf1NTFp94hmgexj52tOxKMO3bt3d2vkplDQONS2praj3iaMH2TQwNZGTxIbv343ZJP1Kt3Kliqg6KZrsZDmuYcOa4cHA9QvUamKxuQqeTy7nsEgf5C0esaeOssop5m7RmqYY29d8jc49MnyBWcyO4xjHvcE+7cZYS0nzLTg/JWjQT1FbBVXCZjm0xL4YIWkNDyMbTid5OCccOK8xtGV7nWfVHFI32mql1FXQ2+EYpS3YbH+Egbt/oFMFEtN0j5rm6qIPsoOBI4uxhS4rR0uWG5k67D1ekoiIrJSC9xHD14VRuKAy0VBwCICzPxCtK7P8Q8laQBERAEREBpr5DsyRzNG5ww7dzC1ik1ZTipp3R8DxaehUac0tc5ruLTg+ay9XTxnfybGiq5QxfKKeKw5/tSsxYc/2pVUvR5LaAFzg1udoncBxRbbTtF7ef3l+NiM7h/3L3ThnJRR4q1PTg5MkNJCKanjiaANkAHHMq6iLaStsfOt3d2ERFJAREQGUz4QiM+AeSIC3OOBVlZEw7hWOgCIiAIqrT3vU1msQIuNdEyQDPsW96Q/2RvUpN8A2z3NY0ueQGgZLicADqobUzh1U+SM7Ucji9h5Oad4I81CdXa3m1TNDabcyWmt00jY5GvwHz5OMOxwbv4fPoup1tujqKZsbe6+Nuyw44Y5Lhq9O5QXkt6OuqU+rhmjE7SN5x5rFqJo/au73RXJ4X08hjkaQ7oVr6n7d/hj8lj7p2ZupRe6PclQDuYMeKkukJY/dpYHPAnLjLsE7y04G1jpkLQ0FAZiJJgfZchzd/gtH2jz1NqltF3tsroKmCR8TXt6EA4I5g7PBaOjoPLJmXr9RFr04nW1RQPT/alZq+OOK7bVvqsDac4ZhJ8HcvUDzU5p54aqFs9NLHLC7g+NwcD6hXnFrkyz2iIoATii9MGXhAZLdzQiqiAoRkYWKRhxBWWor2jXa42PTsldaYWOla9rZJHt2hE0/e2efIdBnPJSldg3NVVU9FA6esnjghbxfI8NHzKhF77UrRR7UdriluEo3B47kef4jvPoMeK5DcrjW3So94uNVNUy8nSOJx5DgPRYysRopckEnvevdQXjaY+r90gd/RUg2N3i74j81FwAM7IAycndxPVVRdlFIgzbGAb3bcnH+tw/ztX0ceJzu3r5milMErJmjLo3B48wcr6WieaiKKaLe2djX7XIZGVXrrgkwb7NT09ulnqIHTCMZw3lnhk8goVZbkyquhhmpdpzt8ZbvDcDmP1XR54YXUc0UwzE6NwfnmMb1z3REUPvlZJvMgjaGbXENPH8gqU4Rc1sa+lcXo6rfa39JLnIyFCO1gf7Eoj/AFwevcep3NHgl7B5hc67XajZbaqPmduYjx3AfqrNJdSMk5ysu1XSvs9QZ7XVy0jz8XsnYDvMcD6hYiK3Y8nSbF2uXCDEd8o46uP/AKtP3H+rT3T6Y8l0Sw6xsV/IbQ1zBOf+XmHs5M+R4+mQvnJUIDhgjI8VzlSTJPq07uRV2Bv3lwXs/wBX3+lu9Ba4pH19NUSiP3eZ205o372OO8YAzjhgcOnfmDG4KvOOLJPSIi8gK1UwR1MEkE8bZIpGlr2OGQ4HiFdRAfOWuNLz6XuzoO+6ilJdSzHmPwnxH5b1HV9OagslHf7ZLQXBm1G8Za4fFG7k5p5FfPuqdNV+ma801awvjd9hUNHdlH6HqFbp1MtmQaVERdSAvoHs8q/fdF2l+SXRw+wdnqwlv5AL5+XYexeuEtirqIu71NUbYGeDXjd9Wlcay6bkomOpJjBYa54OCYS0eu79Vz7SUmxfNnlJCW/kf0U11s4s07OB95zB9VAdPuLb9S45kj6FZ9R9SPo/p1JS0FX3v8HQVxrtPqvedWyxgnZpoY4sePxH+b6LsvEjxK+fL7Wi4Xuvq2nLZZ3EHqMkD6BXKS3PnGYKIisEBUJAGScAISBvPBdY7MuzyT2kV71BAWBh26Wkfz6PePqG+RK8yko8km47JNGvs9L+2blGW11SzEUThvhjP9527PQADqukKgCqqknk7skIiKAEREAWDd7XRXihkorjTsngfxa4cD1B5HxWciA4TrDs3uNmL6m1NkrqDeTsjMsQ8R97zHyUG54C+riFF9R6DsV+25JqUU9U7jUUwDHE9Tuw71C7wrdpEWPnlTzsbrhT6mnpHEAVdMceLmHI+hcrt47JrzSFz7ZUQV7N+Gn91J5YJx9VpLNbb5prUdtra201sDYalntCYiW7BOy/vNyD3Sea6SlGUdgde1x/w9J/7GfmoFYP9/Un8f6FT7XAxp6XeMB7PzUA0+4Ov1Jgj4zz8Cs2p96PqPpn4+p+/gmWoq39nWKvq84dFA8t/ixgfXC+fmgNaGjgBhdg7UZak2GGho4JZpKuoaHCJpcQxoLjuHiGj1UGtegNUXJw9naZaeMj7WqIiA9D3vor9JpRuz5cjKzLVa6+8VQpLXSS1M5+6zgB1J4AeJK6rYex2CNzZb9Xun/q9MCxvq47z6YXSLVaLfZ6YU1ro4KWHOdiJgbk9T1PiUlVXYEJ0L2Z0tleyvvRjrLgMFkYGYoD4Z+J3ifQc10PCqi4NuT3JCIigBERAEREAREQBERAUIymFREB5fEyRuzI1r2nk4ZCtto6Zjg5lPE0jmGAIiMlN2sXmtA4KpCIhACqiIAiIgCIiAIiID//2Q==" alt="user photo" />
            </button>

            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              
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

            </div>

            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-gray-200" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-200 md:hover:bg-transparent  md:hover:text-gray-200 md:p-0 dark:text-white ">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent  md:hover:text-gray-200 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent  md:hover:text-gray-200 md:p-0">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent  md:hover:text-gray-200 md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar2