"use client"

import { useState } from 'react';

const Header = () => {
  // State to manage the navbar toggling
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="#" className="block w-full py-5">
              <img
                src="/assets/images/logo/logo.svg" // Adjusted for Next.js image path
                alt="logo"
                className="block w-full dark:hidden"
              />
              <img
                src="/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden w-full dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)} // Toggle the state on click
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${navbarOpen ? 'navbarTogglerActive' : ''}`}
                id="navbarToggler"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11 dark:bg-dark-2 ${navbarOpen ? '' : 'hidden'}`}
                id="navbarCollapse"
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium  hover:text-blue-500 lg:ml-10 lg:inline-flex dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium  hover:text-blue-500 lg:ml-10 lg:inline-flex dark:text-white"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium  hover:text-blue-500 lg:ml-10 lg:inline-flex dark:text-white"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="#"
                className="px-7 py-3 text-base font-medium  hover:text-blue-500 dark:text-white"
              >
                Login
              </a>
              <a
                href="#"
                className="rounded-md bg-blue-700 px-7 py-3 text-base font-medium text-white hover:bg-blue-800"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

