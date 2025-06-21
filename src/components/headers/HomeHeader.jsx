import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon

const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-violet-600">
          Project Build
        </Link>

        {/* Desktop Navigation */}
        <nav className="space-x-6 hidden md:flex md:items-center">
          <Link to="/aboutus" className="text-gray-700 hover:text-violet-600">
            About Us
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-violet-600">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-violet-600">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
          >
            Login
          </Link>
        </nav>

        {/* Hamburger icon (Mobile only) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 ">
          <h2 className="text-xl font-bold text-violet-600">Project Build</h2>
          <button onClick={closeMenu} className="text-2xl text-gray-700">
            <IoClose />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/aboutus"
            className="text-gray-700 hover:text-violet-600"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-violet-600"
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-violet-600"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
            onClick={closeMenu}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
