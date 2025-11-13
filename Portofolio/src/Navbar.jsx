import React from 'react';
import Logo from './assets/Group 24.png'
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-black border-b-2 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">

          <div className="w-12 h-12 shrink-0">
            <a href="#" className="text-2xl font-bold tracking-wider">
              <img src={Logo} alt="Logo Perusahaan" />
            </a>
          </div>

          <div className="ml-4 md:ml-12 hidden md:block grow">
            <div className="flex items-baseline space-x-4 justify-center">
              <a href="#home" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Home</a>
              <a href="#about" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">About</a>
              <a href="#portfolio" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Portfolio</a>
              <a href="#contact" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contact</a>
            </div>
          </div>

          <div className="md:hidden ml-auto">
            {/* Perhatikan: Anda mungkin perlu menambahkan fungsi onClick untuk tombol ini di React */}
            <button
              type="button"
              id="menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">Home</a>
          <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">About</a>
          <a href="#portfolio" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
