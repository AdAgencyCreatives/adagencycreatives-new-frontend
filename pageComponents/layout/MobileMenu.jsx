// components/Sidebar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import PrimaryMenu from './PrimaryMenu';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MobileMenu = ({isHomePage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdown1Open, setDropdown1Open] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleDropdown1 = (index) => {
    setDropdown1Open(dropdown1Open === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar when a link is clicked
  };

  return (
    <div className="relative flex items-center">
      {/* Toggle Button */}
      <button className={`${isHomePage ? 'hidden sm:block me-2' : 'hidden'}`}>
        <MagnifyingGlassIcon className={`${isHomePage ? 'w-5 md:w-6 3xl:w-8.5 4xl:w-10.5' : 'w-9'} ml-2 `} />
      </button>
      <button
        className={`focus:outline-none ${isHomePage ? 'block' : 'lg:hidden inline-block'}`}

      >
        {/* {isOpen ? 
          <XMarkIcon className="w-8 ml-2" onClick={toggleSidebar} />
        : 
          <Bars3Icon className="w-8 ml-2" onClick={toggleSidebar} />
        } */}
        <Bars3Icon className={`${isHomePage ? 'w-10 md:w-8 3xl:w-11 4xl:w-15' : 'w-9'} ml-2 `} onClick={toggleSidebar} />
      </button>

      {/* Sidebar */}
      <div
        className={`p-4 space-y-4 overflow-y-auto	z-20 fixed top-0 left-0 w-full h-full bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/aac-logo-header.png"
              alt="Logo"
              className="w-20 h-20 hover:rotate-45 transition-transform duration-3000"
            />
          </Link>
          <XMarkIcon className="w-8 ml-2" onClick={toggleSidebar} />
        </div>
        <PrimaryMenu setIsOpen={setIsOpen} />
      </div>

      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;

