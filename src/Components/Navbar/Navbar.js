import React, { useState } from 'react';
import { Link} from 'react-scroll';
import neplogo from '../../assets/neplogo.png';
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const drawer = () => {
    setisOpen(!isOpen);
    console.log('isOpen', isOpen);
  };
  return (
    <div>
      <header class='text-black-400 body-font'>
      {/* <header class='text-gray-400 bg-gray-900 body-font'> */}
        <div class='container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center'>
          <a class='flex title-font font-medium items-center text-white'>
          <img 
          class='h-20 rounded w-full object-cover object-center mb-3 '
          src={neplogo}></img>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
              />
            </svg> */}
            <span class='ml-3 text-xl text-sky-900 md:text-2xl font-extrabold'>NepBigyapan</span>
          </a>
          <nav
            className='ml-auto md:hidden'
            onClick={() => {
              drawer();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </nav>
          {/* Nav */}
          <nav class='hidden md:block md:ml-auto flex flex-wrap flex-col sm:flex-row items-center text-base justify-center'>
            <Link
              to='About'
              smooth={true}
              // class='mr-5 hover:text-white cursor-pointer'
              class='mr-5 hover:text-blue-600 cursor-pointer font-extrabold'
            >
              About Us
            </Link>
            <Link
              to='Services'
              smooth={true}
              class='mr-5 hover:text-blue-600 cursor-pointer font-extrabold'
            >
              Services
            </Link>
            <Link
              to='Projects'
              smooth={true}
              class='mr-5 hover:text-blue-600 cursor-pointer font-extrabold'
            >
              Projects
            </Link>
            <Link
              to='OurTeam'
              smooth={true}
              class='mr-5 hover:text-blue-600 cursor-pointer font-extrabold'
            >
              Our Team
            </Link>
            <Link
              to='ContactUs'
              smooth={true}
              class='inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white mt-4 md:mt-0 cursor-pointer font-extrabold'
            >
              Contact Us
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </Link>
          </nav>
        </div>
        {/* mobile-nav */}
        <nav
          class={` ${
            !isOpen ? 'hidden' : ''
          } flex flex-col items-center text-white justify-center `}
        >
          <Link to='About' smooth={true} class='m-5 hover:text-white'>
            About Us
          </Link>
          <Link to='Services' smooth={true} class='m-5 hover:text-white'>
            Services
          </Link>
          <Link to='Projects' smooth={true} class='m-5 hover:text-white'>
            Projects
          </Link>
          <Link to='OurTeam' smooth={true} class='m-5 hover:text-white'>
            Our Team
          </Link>
          <Link
            to='ContactUs'
            smooth={true}
            class='inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white my-4 md:mt-0'
          >
            Contact Us
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
