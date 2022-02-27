import React from 'react';
import RestroApp from '../../assets/restroapp.png';
import GMIS from '../../assets/gmis.png';
import ECOM from '../../assets/flutterecommerce.png';

const Projects = ({ id }) => {
  return (
    <div id={id}>
      <section className='text-gray-400 body-font bg-white-900'>
        <div className='container px-5 py-10 md:py-20 mx-auto'>
          <div className='flex flex-wrap w-full mb-20'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-extrabold title-font mb-2 text-black ' >
                Here's our projects.
              </h1>
              <div className='h-1 w-20 bg-indigo-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-black text-opacity-100 font-bold'>
              We are a team of IT professionals and these are some of the
              projects we have worked on.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-white-800 bg-opacity-100  border-blue-800 border p-6 rounded-lg shadow hover:shadow-2xl'>
                <img
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src={RestroApp}
                  // src='https://dummyimage.com/720x400'
                  alt='content'
                />
                <h3 className='tracking-widest text-blue-800 text-xl font-bold title-font'>
                  Restaurant Management System
                </h3>
                <h2 className='text-lg text-black font-medium title-font mb-4'>
                  RestroApp
                </h2>
                <p className='leading-relaxed text-black'>
                  The RestroApp is a restaurant management system that manages
                  and handles POS and billing of the restaurant. A complete
                  control in a easy to use, simple and sleek design.
                </p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-white-800 bg-opacity-100  border-blue-800 border p-6 rounded-lg shadow hover:shadow-2xl'>
                <img
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src={GMIS}
                  alt='content'
                />
                <h3 className='tracking-widest text-blue-800 text-xl font-bold title-font'>
                  Irrigation Management System
                </h3>
                <h2 className='text-lg text-black font-medium title-font mb-4'>
                  GMIS
                </h2>
                <p className='leading-relaxed text-black'>
                  GMIS, an irrigation management system, is a software program
                  developed for the Nepal government to deal with problems
                  relating to irrigation.
                </p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-white-800 bg-opacity-100 border-blue-800 border p-6 rounded-lg shadow hover:shadow-2xl'>
                <img
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src={ECOM}
                  alt='content'
                />
                <h3 className='tracking-widest text-blue-800 text-xl font-bold title-font'>
                  Flutter Application
                </h3>
                <h2 className='text-lg text-black font-medium title-font mb-4'>
                  Ecommerce App
                </h2>
                <p className='leading-relaxed text-black'>
                  Ecommerce app is a mobile application providing sales and
                  business management as a service for a range of businesses.
                </p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-white-800 bg-opacity-100  border-blue-800 border p-6 rounded-lg shadow hover:shadow-2xl'>
                <img
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src='https://dummyimage.com/723x403'
                  alt='content'
                />
                <h3 className='tracking-widest text-blue-800 text-xl font-bold title-font'>
                  Song Management System
                </h3>
                <h2 className='text-lg text-black font-medium title-font mb-4'>
                  Believe
                </h2>
                <p className='leading-relaxed text-black'>
                  A song management system to upload and manage the songs of
                  different clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
