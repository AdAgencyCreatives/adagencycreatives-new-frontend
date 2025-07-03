'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import ChatIcon from 'icons/ChatIcon';
import CloseIcon from 'icons/CloseIcon';
import MenuIcon from 'icons/MenuIcon';
import { Context as SiteContext } from "contexts/SiteContext";
import { Context as AuthContext } from "contexts/AuthContext";
import DetailedMobileMenu from './DetailedMobileMenu';
import ActionLinkDiv from 'components/ActionLinkDiv';
import CallToActionLink from 'components/CallToActionLink';
import LogoutIcon from 'icons/LogoutIcon';
import NotificationBellIcon from 'icons/NotificationBellIcon';

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
    <div className="relative flex items-center max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
      {user!=null && (
        <ActionLinkDiv href='/sign-out' className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary">
          <LogoutIcon />
        </ActionLinkDiv>
      )}
      <ActionLinkDiv href='/chat' className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary">
        <ChatIcon />
      </ActionLinkDiv>
      {user!=null && (
        <ActionLinkDiv href='/notifications' className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary">
          <NotificationBellIcon />
        </ActionLinkDiv>
      )}
      {/* Toggle Button */}
      <button
        className={`focus:outline-none ${isHomePage ? 'block' : 'lg:hidden inline-block'} cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary`}
      >
        <MenuIcon onClick={toggleSidebar} />
      </button>

      {/* Sidebar */}
      <div
        className={`p-[27.5px] 3xl:p-[37px] 4xl:p-[49px] border-l-[0.89px] border-primary space-y-4 overflow-y-auto z-20 fixed top-0 right-0 w-full md:w-[375px] 3xl:w-[500px] 4xl:w-[667px] h-full bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-full'} flex flex-col justify-between overflow-y-scroll mobile-menu-links-container`}
      >
        <div>
          <div className="flex items-center justify-between mb-[32px] 3xl:mb-[42.67px] 4xl:mb-[56.89px]">
            <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer">
              <img
                src="/aac-logo-white.avif"
                alt="Logo"
                className={[
                  "hover:rotate-45 transition-transform duration-3000",
                  "max-sm:w-[3.5rem] w-[3.5rem] md:w-[4.269rem] xl:w-[4.669rem] 2xl:w-[4.922rem] 3xl:w-[6.563rem] 4xl:w-[8.75rem]",
                  "max-sm:h-[3.5rem] h-[3.5rem] md:h-[4.269rem] xl:h-[4.669rem] 2xl:h-[4.922rem] 3xl:h-[6.563rem] 4xl:h-[8.75rem]",
                ].join(' ')}
              />
            </Link>
            <div className="flex flex-row gap-[32px] 3xl:gap-[42.67px] 4xl:gap-[56.89px]">
              <ActionLinkDiv href='/chat' className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary">
                <ChatIcon />
              </ActionLinkDiv>
              <button className="cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-primary">
                <CloseIcon onClick={toggleSidebar} />
              </button>
            </div>
          </div>
          <DetailedMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        </div>
        {user ? (
          <div className="flex flex-col gap-[12px] 3xl:gap-[16px] 4xl:gap-[21.33px]">
            <CallToActionLink href="/sign-out" onClick={() => setIsOpen(false)}>
              Sign Out
            </CallToActionLink>
          </div>
        ) : (
          <div className="flex flex-col gap-[12px] 3xl:gap-[16px] 4xl:gap-[21.33px]">
            <CallToActionLink href="/" onClick={() => setIsOpen(false)}>
              Sign In
            </CallToActionLink>
            <CallToActionLink href="/" onClick={() => setIsOpen(false)}>
              Register
            </CallToActionLink>
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

