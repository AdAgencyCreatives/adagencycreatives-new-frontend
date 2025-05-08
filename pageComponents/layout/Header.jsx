"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryMenu from "./PrimaryMenu";
import MobileMenu from "./MobileMenu";
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname()
  const isHomePage = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <header
      className={`flex items-center justify-between py-6 4xl:py-[42.67px] px-10 4xl:px-[61.33px] z-30 ${scrolled ? "bg-black/75" : "bg-transparent"
        } fixed w-full top-0`}
    >
      <Link href="/" className="cursor-pointer">
        <img
          src="/aac-logo-round.png"
          alt="Logo"
          className="w-[56px] h-[56px] 2xl:w-[76px] 2xl:h-[76px] 3xl:w-[100px] 3xl:h-[100px] 4xl:w-[135.11px] 4xl:h-[135.11px] hover:rotate-45 transition-transform duration-3000"
        />
      </Link>
      <div className="inline-block">
        <MobileMenu isHomePage={true} />
      </div>
    </header>
  );
};

export default Header;
