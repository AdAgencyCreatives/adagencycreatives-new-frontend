'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import ChatIcon from 'icons/ChatIcon';
import CloseIcon from 'icons/CloseIcon';
import MenuIcon from 'icons/MenuIcon';
import { Context as SiteContext } from "contexts/SiteContext";
import { Context as AuthContext } from "contexts/AuthContext";
import DetailedMobileMenu from './DetailedMobileMenu';

const MobileMenu = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    state: { user },
  } = useContext(AuthContext);

  const { setBodyOverflowHidden } = useContext(SiteContext);

  useEffect(() => {
    setBodyOverflowHidden(isOpen);
  }, [isOpen]);

  return (
    <div className="relative flex items-center gap-[32px] 3xl:gap-[42.67px] 4xl:gap-[56.89px]">
      {/* Toggle Button */}
      <button className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
        <ChatIcon />
      </button>
      <button
        className={`focus:outline-none ${isHomePage ? 'block' : 'lg:hidden inline-block'} cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow`}
      >
        <MenuIcon onClick={toggleSidebar} />
      </button>

      {/* Sidebar */}
      <div
        className={`p-[27.5px] 3xl:p-[37px] 4xl:p-[49px] border-l-[0.89px] border-brand-yellow space-y-4 overflow-y-auto z-20 fixed top-0 right-0 w-full md:w-[375px] 3xl:w-[500px] 4xl:w-[667px] h-full bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-full'} flex flex-col justify-between overflow-y-scroll mobile-menu-links-container`}
      >
        <div>
          <div className="flex items-center justify-end max-md:justify-between mb-[32px] 3xl:mb-[42.67px] 4xl:mb-[56.89px]">
            <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer md:hidden">
              <img
                src="/aac-logo-header.png"
                alt="Logo"
                className="w-[56px] h-[56px] hover:rotate-45 transition-transform duration-3000"
              />
            </Link>
            <div className="flex flex-row gap-[32px] 3xl:gap-[42.67px] 4xl:gap-[56.89px]">
              <button className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
                <ChatIcon />
              </button>
              <button className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
                <CloseIcon onClick={toggleSidebar} />
              </button>
            </div>
          </div>
            <DetailedMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        </div>
        {user ? (
          <div className="flex flex-col gap-[12px] 3xl:gap-[16px] 4xl:gap-[21.33px]">
            <Link href="/sign-out" onClick={() => setIsOpen(false)}
              className="font-bold text-[14px] 3xl:text-[18px] 4xl:text-[24px] leading-[19.26px] 3xl:leading-[25.68px] 4xl:leading-[34.24px] p-[8px] 3xl:p-[10.63px] 4xl:p-[14px] border-[2.96px] 3xl:border-[3.95px] 4xl:border-[5.27px] block text-center border-brand-yellow hover:border-white text-brand-yellow hover:text-white bg-black hover:bg-brand-yellow uppercase rounded-full"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-[12px] 3xl:gap-[16px] 4xl:gap-[21.33px]">
            <Link href="/" onClick={() => setIsOpen(false)}
              className="font-bold text-[14px] 3xl:text-[18px] 4xl:text-[24px] leading-[19.26px] 3xl:leading-[25.68px] 4xl:leading-[34.24px] p-[8px] 3xl:p-[10.63px] 4xl:p-[14px] border-[2.96px] 3xl:border-[3.95px] 4xl:border-[5.27px] block text-center border-brand-yellow hover:border-white text-brand-yellow hover:text-white bg-black hover:bg-brand-yellow uppercase rounded-full"
            >
              Sign In
            </Link>
            <Link href="/" onClick={() => setIsOpen(false)}
              className="font-bold text-[14px] 3xl:text-[18px] 4xl:text-[24px] leading-[19.26px] 3xl:leading-[25.68px] 4xl:leading-[34.24px] p-[8px] 3xl:p-[10.63px] 4xl:p-[14px] border-[2.96px] 3xl:border-[3.95px] 4xl:border-[5.27px] block text-center border-brand-yellow hover:border-white text-brand-yellow hover:text-white bg-black hover:bg-brand-yellow uppercase rounded-full"
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

