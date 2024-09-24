import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlane, FaArrowLeft } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white p-4 h-16">
      <div className="flex justify-between items-center ml-2 mr-2">
        <div>
          <div className="flex items-center ">
            <FaPlane color="purple" size={30} />{" "}
            <h2 className="ml-2 text-lg font-bold">PLANE SCAPE</h2>
            <div className="col-span-1 pl-4">
              {location.pathname === "/my-flight" && (
                <Link
                  to="/"
                  className="flex items-center hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md transition duration-200 bg-purple-200 text-purple-700"
                >
                  <FaArrowLeft className="mr-2 " />
                  <h2 className="text-md font-bold">Homepage</h2>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <Link
            to="/my-flight"
            className=" hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md transition duration-200 bg-purple-200 text-purple-700"
          >
            <h2 className="text-md font-bold">My Flights</h2>
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center ml-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  My Account
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
