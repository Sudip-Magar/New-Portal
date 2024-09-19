import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [bar, setBar] = useState(false);
  const location = useLocation();
  const abc = () => {
    setBar(!bar)
    console.log('clicked')
  }
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Header with Title and Menu Toggle */}
      <div className='flex justify-between items-center text-violet-700 px-10 py-1'>
        <h2 className='text-3xl'>SKS News</h2>
        <div className={` lg:block absolute bottom-48 right-6 text-white lg:text-violet-700  z-10 lg:static ${bar ? 'block' :'hidden'}`}>
          <a href="" className='mx-1  '><i className="fa-brands fa-facebook"></i></a>
          <a href="" className='mx-1 '><i className="fa-brands fa-instagram"></i></a>
          <a href="" className='mx-1  '><i className="fa-brands fa-tiktok"></i></a>
          <a href="" className='mx-1  '><i className="fa-brands fa-youtube"></i></a>
          <a href="" className='mx-1  '><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='lg:hidden text-2xl' onClick={abc}>
          {/* Menu bar icon */}
          {bar ? <i className="fa-solid fa-xmark 0"></i> : <i className={`fa-solid fa-bars `} ></i>}


        </div>
      </div>

      {/* Menu Links */}
      <div className='relative'>

        <ul className={`lg:flex block justify-center gap-5 bg-violet-700  text-white absolute lg:relative top-0  right-0 w-full text-center py-4 pb-12 lg:py-0 ${bar ? 'block' : 'hidden'}`}>

          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`hover:text-gray-200 py-2 mx-3 px-4  lg:py-1 rounded-md my-1 ${isActive('/cat/business') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/business'>Business</Link>
          </li>
          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/cat/entertainment') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/entertainment'>Entertainment</Link>
          </li>
          
          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/cat/health') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/health'>Health</Link>
          </li>
          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/cat/science') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/science'>Science</Link>
          </li>
          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/cat/sports') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/sports'>Sports</Link>
          </li>
          <li className={`hover:text-gray-200 py-2 mx-3 px-4 lg:py-1 rounded-md my-1 ${isActive('/cat/technology') ? 'bg-violet-950 ' : ''}`}>
            <Link to='/cat/technology'>Technology</Link>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default Header;
