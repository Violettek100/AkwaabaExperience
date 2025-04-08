// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Akwaaba Experience</h1>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Explore</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Bookings</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
