import React, { useState } from "react";
import "./navbar.css";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="navbar  bg-gradient-to-r from-stone-900 to-indigo-600 min-h-screen">
      <div className="navbar-logo">
        <img src="/Alwatad.ico" alt="Logo" className="logo-image" />
      </div>

      <button
        className="navbar-menu-toggle"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <span>&#10005;</span> // X icon
        ) : (
          <span>&#9776;</span> // Hamburger icon
        )}
      </button>

      <div className="navbar-links">
        <ul className={`navbar-links-ul${menuOpen ? " active" : ""}`}>
          <li className="navbar-links-ul-li">
            <a
              href="#"
              className="navbar-links-ul-li-a"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li className="navbar-links-ul-li">
            <a
              href="#"
              className="navbar-links-ul-li-a"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li className="navbar-links-ul-li">
            <a
              href="#"
              className="navbar-links-ul-li-a"
              onClick={handleLinkClick}
            >
              Programs
            </a>
          </li>
          <li className="navbar-links-ul-li">
            <a
              href="#"
              className="navbar-links-ul-li-a"
              onClick={handleLinkClick}
            >
              Profile
            </a>
          </li>
          <li className="navbar-links-ul-li">
            <a
              href="#"
              className="navbar-links-ul-li-a"
              onClick={handleLinkClick}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-buttons">
        <button className="navbar-buttons-start"> Start Now </button>
      </div>
    </div>
  );
}
