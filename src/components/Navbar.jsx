"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-20 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold text-yellow-400">
            Swapnabir Dutta
          </div>
          <div className="flex flex-col md:flex-row gap-2 italic">
            <div className="text-gray-200 text-sm"> / Full Stack Developer</div>
            <div className="text-gray-200 text-sm">
              {" /  "}
              Cloud Solution Architect
            </div>{" "}
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-200">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav */}
      {navOpen && (
        <ul className="md:hidden bg-gray-900 text-gray-200">
          {links.map((link) => (
            <li key={link} className="px-6 py-2 border-b border-gray-700">
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="block cursor-pointer hover:text-yellow-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
