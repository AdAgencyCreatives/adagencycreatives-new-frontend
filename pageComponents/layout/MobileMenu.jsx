// components/Sidebar.jsx
'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import PrimaryMenu from './PrimaryMenu';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ChatIcon from 'icons/ChatIcon';
import CloseIcon from 'icons/CloseIcon';
import MenuIcon from 'icons/MenuIcon';
import { Context as AuthContext } from "contexts/AuthContext";
import SplineGraphic from 'components/SplineGraphic';

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

  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <div className="relative flex items-center gap-[32px] 3xl:gap-[42.67px] 4xl:gap-[56.89px]">
      {/* Toggle Button */}
      <button>
        <ChatIcon />
      </button>
      <button
        className={`focus:outline-none ${isHomePage ? 'block' : 'lg:hidden inline-block'}`}

      >
        {/* {isOpen ? 
          <XMarkIcon className="w-8 ml-2" onClick={toggleSidebar} />
        : 
          <Bars3Icon className="w-8 ml-2" onClick={toggleSidebar} />
        } */}
        {/* <Bars3Icon className={`${isHomePage ? 'w-10 md:w-8 3xl:w-11 4xl:w-15' : 'w-9'} ml-2 `} onClick={toggleSidebar} /> */}
        <MenuIcon onClick={toggleSidebar} />
      </button>

      {/* Sidebar */}
      <div
        className={`p-[27.5px] 3xl:p-[37px] 4xl:p-[49px] border-l-[0.89px] border-yellow-400 space-y-4 overflow-y-auto z-20 fixed top-0 right-0 w-full md:w-[375px] 3xl:w-[500px] 4xl:w-[667px] h-full bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-full'} flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-end max-md:justify-between mb-[32px] 3xl:mb-[42.67px] 4xl:mb-[56.89px]">
            <Link 
              href="/" 
              className="cursor-pointer md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/aac-logo-header.png"
                alt="Logo"
                className="w-[56px] h-[56px] hover:rotate-45 transition-transform duration-3000"
              />
            </Link>
            <div className="flex flex-row gap-[32px] 3xl:gap-[42.67px] 4xl:gap-[56.89px]">
              <ChatIcon />
              <CloseIcon onClick={toggleSidebar} />
            </div>
          </div>
          <PrimaryMenu setIsOpen={setIsOpen} user={user} />
        </div>
        {!user && (
          <div className="flex flex-col gap-[12px] 3xl:gap-[16px] 4xl:gap-[21.33px]">
            <Link 
              href="/" 
              className="font-bold text-[14px] 3xl:text-[18px] 4xl:text-[24px] leading-[19.26px] 3xl:leading-[25.68px] 4xl:leading-[34.24px] p-[8px] 3xl:p-[10.63px] 4xl:p-[14px] border-[2.96px] 3xl:border-[3.95px] 4xl:border-[5.27px] block text-center border-white rounded-full bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 uppercase"
            >
              Sign In
            </Link>
            <Link 
              href="/"
              className="font-bold text-[14px] 3xl:text-[18px] 4xl:text-[24px] leading-[19.26px] 3xl:leading-[25.68px] 4xl:leading-[34.24px] p-[8px] 3xl:p-[10.63px] 4xl:p-[14px] border-[2.96px] 3xl:border-[3.95px] 4xl:border-[5.27px] block text-center border-yellow-400 text-yellow-400 rounded-full bg-transparent hover:bg-yellow-400 hover:text-white hover:border-white uppercase"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-[70%] z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;

