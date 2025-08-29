import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">
          HealthCompanion
        </h1>
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
