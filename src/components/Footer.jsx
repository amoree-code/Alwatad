import React from "react";
import { Search } from "lucide-react";

function Footer() {
  return (
    <footer className="relative text-white py-16 px-6 mt-8 ">
      <div className="absolute top-96 left-[49rem] right-0 h-96  bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60" />

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Left Side - Logo and Description */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">I</span>
              </div>
              <h2 className="text-xl font-semibold">Incuvate</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We are proud to offer a wide range of templates for websites, all
              designed to help you achieve your goals.
            </p>
          </div>

          {/* Right Side - Search and Description */}
          <div className="flex-1 max-w-md ml-8">
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are proud to offer a wide range of templates for websites, all
              designed to help you achieve your goals.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search ..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-12"></div>

        {/* Footer Links */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Developers</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  System Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  System Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © 2022 Incuvate! All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                API
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Data Processing Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
