import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/30 backdrop-blur-md shadow-md' : ''
        }`}
      >
        <div className="h-[90px] max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-8 lg:px-12">
          <ul className="hidden md:flex items-center justify-between gap-8 z-50">
            <Link to={'/'} className="flex items-center gap-2 cursor-pointer">
              <img src="/Alwatad.ico" alt="Logo" className="w-12 h-12 mr-10" />
            </Link>
            <li>
              <Link to={'/'} className="text-white font-normal">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} className="text-white font-normal">
                About Us
              </Link>
            </li>
            <li>
              <Link to={'/programs'} className="text-white font-normal">
                Programs
              </Link>
            </li>
            <li>
              <Link to={'/portfolio'} className="text-white font-normal">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={'/contact'} className="text-white font-normal">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <img src="/icons/globe-alt.svg" alt="" width={30} height={30} />
            <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg px-6 py-2 text-base shadow-md transition-all duration-200">
              Start Now
            </button>
          </div>

          <button
            className="md:hidden absolute right-10 flex items-center justify-center w-11 h-11 rounded-lg bg-indigo-900/20 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </nav>

      {/* قائمة الموبايل تبقى كما هي */}
      <div
        className={`fixed inset-0 bg-[rgba(20,20,40,0.97)] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden shadow-2xl ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <img src="/Alwatad.ico" alt="Logo" className="w-16 h-16 mb-4" />
        </div>

        <button
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-900/40 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-indigo-400 z-50 shadow-lg"
          onClick={handleMenuToggle}
          aria-label="Close menu"
        >
          <span>&#10005;</span>
        </button>

        <ul className="flex flex-col gap-7 items-center mt-28">
          <li>
            <a
              href="#"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <Link
              to={'/programs'}
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to={'/Portfolio'}
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button className="mt-10 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg px-10 py-4 text-xl shadow-md hover:from-indigo-400 hover:to-indigo-600">
          Start Now
        </button>
      </div>
    </>
  );
}
