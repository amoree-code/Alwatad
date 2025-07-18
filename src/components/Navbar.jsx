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
      {/* ====== Navbar ====== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : ''
        }`}
      >
        <div className="h-[90px] max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo + Links */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <img src="/Alwatad.ico" alt="Logo" className="w-12 h-12" />
            </Link>

            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 font-normal transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300 font-normal transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-white hover:text-gray-300 font-normal transition"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-gray-300 font-normal transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 font-normal transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Globe + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <img src="/icons/globe-alt.svg" alt="" className="w-6 h-6" />
            <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg px-6 py-2 text-base shadow-md hover:from-indigo-600 hover:to-indigo-800 transition">
              Start Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-900/30 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </nav>

      {/* ====== Mobile Menu ====== */}
      <div
        className={`fixed inset-0 bg-[rgba(20,20,40,0.97)] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden shadow-2xl ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Logo */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <img src="/Alwatad.ico" alt="Logo" className="w-16 h-16 mb-4" />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-7 items-center mt-28">
          <li>
            <Link
              to="/"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-2xl font-semibold px-8 py-3"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <button className="mt-10 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg px-10 py-4 text-xl shadow-md hover:from-indigo-400 hover:to-indigo-600 transition">
          Start Now
        </button>
      </div>
    </>
  );
}
