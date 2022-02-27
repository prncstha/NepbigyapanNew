import React from 'react';
import { ReactComponent as HeroImg } from '../../assets/heroImg.svg';
import { Link } from 'react-scroll';
import hero from '../../assets/hero.jpg';

const Hero = ({ id }) => {
  return (
    <div>
      <section className='text-gray-600 bg-white-900 body-font'>
        <div className='container mx-auto md:w-11/12 flex px-5 py-10 md:py-20 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-2xl mb-4 font-black text-black '>
              A Full Service Information Technology Center.
            </h1>
            <p className='mb-6 leading-relaxed font-extrabold text-black'>
              We design and code beautiful applications. We love what we do.
            </p>
            <div className='flex justify-center'>
              <Link
                to='About'
                smooth={true}
                className='inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg '
              >
                About Us
              </Link>
              <Link
                to='Projects'
                smooth={true}
                className=' ml-4 inline-flex  text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg'
              >
                See our work
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            {/* <HeroImg className='w-full h-1/3 sm:w-3/4 sm:h-2/3 lg:w-full lg:h-auto  object-cover' /> */}
            <img 
            className='max-w-full h-auto '
            src={hero} />
            {/* <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://dummyimage.com/720x600'
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
