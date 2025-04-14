import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-white pb-28 pt-32 lg:pt-36 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content Section */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
            <h1 className="mb-5 text-4xl font-bold text-gray-800 sm:text-5xl lg:text-4xl xl:text-5xl dark:text-white">
  Elevate Your Brand <br />
  with Expert SEO & <br />
  Web Development.
</h1>
<p className="mb-8 max-w-xs text-base text-gray-600 dark:text-gray-400">
  At our agency, we craft high-performance websites and drive traffic with proven SEO strategies—helping businesses grow, scale, and stand out online.
</p>

              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-600 lg:px-7"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-600 hover:text-blue-500 dark:text-white"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download App
                  </a>
                </li>
              </ul>
              {/* Clients Section */}
              <div className="clients pt-16">
                <h6 className="mb-6 flex items-center text-xs font-normal text-gray-600 dark:text-gray-400">
                  Some Of Our Clients
                  <span className="ml-3 inline-block h-px w-8 bg-gray-600"></span>
                </h6>
                <div className="flex items-center gap-4 xl:gap-12">
                  <a href="#" className="block py-3">
                    <img
                      src="/assets/images/brands/oracle.svg"
                      alt="oracle"
                      width={100}
                      height={30}
                    />
                  </a>
                  <a href="#" className="block py-3">
                    <img
                      src="/assets/images/brands/intel.svg"
                      alt="intel"
                      width={100}
                      height={30}
                    />
                  </a>
                  <a href="#" className="block py-3">
                    <img
                      src="/assets/images/brands/logitech.svg"
                      alt="logitech"
                      width={100}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer between content */}
          <div className="hidden px-4 lg:block lg:w-1/12"></div>

          {/* Right Content Section */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image
                  src="/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                  width={600}
                  height={500}
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// This component is a hero section for a landing page. It includes a title, description, call-to-action buttons, and client logos. The right side features an image with an SVG background effect.