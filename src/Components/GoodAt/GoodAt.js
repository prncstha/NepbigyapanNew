import React from 'react';

const GoodAt = ({ id }) => {
  return (
    <div id={id}>
      <section class='text-gray-900 bg-white-200 body-font'>
        <div class='container px-5 py-10 md:py-20 mx-auto'>
          <div class='text-center mb-20'>
            <h1 class='sm:text-3xl text-2xl  title-font text-black mb-4  font-extrabold text-black'>
              Here's what we are good at.
            </h1>
            <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto  font-extrabold text-black'>
            {/* <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 text-opacity-80 '> */}
              We mainly specialize in creating beautiful and functional
              websites, web-apps, and mobile apps as well.
            </p>
            <div class='flex mt-6 justify-center'>
              <div class='w-16 h-1 rounded-full bg-blue-500 inline-flex'></div>
            </div>
          </div>
          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 drop-shadow-lg '>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100  text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div class='flex-grow '>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3 '>
                  Web Development
                </h2>
                <p class='leading-relaxed text-base'>
                  We design and build functional web apps for your business or
                  company. We offer customized solutions that are tailored to
                  meet your specific needs. With us you get reliable and
                  efficient web applications, developed by an organized,
                  motivated and loyal group of developers.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div class='flex-grow'>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3'>
                  Mobile App Development
                </h2>
                <p class='leading-relaxed text-base'>
                  We create beautiful, interactive and engaging mobile apps for
                  iOS, Android and other emerging digital platforms. Our
                  customers range from small businesses to major corporations,
                  but our focus is firmly on the quality of our products.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
              </div>
              <div class='flex-grow'>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3'>
                  Graphic Design
                </h2>
                <p class='leading-relaxed text-base font-medium'>
                  We are a company that provides graphic design services as per
                  required. Our clients' designs are simple and clean. We have
                  been in this for many years now. We are also continuously
                  improving our skills on graphic designing to retain our
                  clients.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 drop-shadow-lg '>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100  text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />


                </svg>
              </div>
              <div class='flex-grow '>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3 '>
                Business Analysis Services
                </h2>
                <p class='leading-relaxed text-base'>
              
                We provide top business analysis services to create custom web solutions perfectly tailored to your company’s needs. To ensure predictable project results, our business analysts write comprehensive specifications which outline a single vision of a product for all sides of the development process.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"'
                  />


                </svg>
              </div>
              <div class='flex-grow'>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3'>
                ENTERPRISE IT TRANSFORMATION AND AUTOMATION
                </h2>
                <p class='leading-relaxed text-base'>
                We help customers re-think their enterprise IT operations with scalable, business-aligned operating models that are flexible and adaptable to future needs. This is enabled by our intelligent platforms that automate the entire IT service delivery lifecycle.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class='p-4 md:w-1/3 flex flex-col text-center items-center shadow hover:shadow-2xl '>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-indigo-400 mb-5 flex-shrink-0 shadow hover:shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='blue'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                   

                  />
                </svg>
              </div>
              <div class='flex-grow'>
                <h2 class='text-blue text-lg title-font font-extrabold mb-3'>
                CONSULTING
                </h2>
                <p class='leading-relaxed text-base'>
                We drive growth by solving complex business problems swiftly, via a design-centric, agile, and platform-driven method. We help our clients tackle the present and focus on what's next. We do this at Nepbigyapan™, where multi-disciplinary teams craft meaningful digital solutions.
                </p>
                {/* <a class='mt-3 text-indigo-400 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoodAt;
