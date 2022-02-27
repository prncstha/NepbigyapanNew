import React from 'react';

const Team = ({ id }) => {
  return (
    <div id={id}>
      <section className='text-black-400 bg-blue-800 body-font'>
        <div className='container px-5 py-10 md:py-20 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Our Team
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-white'>
              We introduce our expert team.
            </p>
          </div>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Deepak Thakur
                  </h2>
                  <p className='text-white'>CEO</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Raj Kumar Shrestha
                  </h2>
                  <p className='text-white'>Project Manager</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Prayash Shrestha
                  </h2>
                  <p className='text-white'>UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Dipesh Bhattarai
                  </h2>
                  <p className='text-white'>Front-End Developer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Uzzwal Badal
                  </h2>
                  <p className='text-white'>Back-end Developer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Sijan Pokharel
                  </h2>
                  <p className='text-white'>Mobile App Developer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Sujan Ghorasaini
                  </h2>
                  <p className='text-white'>Back-End Developer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Bharat Chand
                  </h2>
                  <p className='text-white'>Marketing Expert</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full flex items-center border-blue-800 border p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-blue-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                />
                <div className='flex-grow'>
                  <h2 className='text-white title-font font-bold'>
                    Bipin Shrestha
                  </h2>
                  <p className='text-white'>Networking Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
