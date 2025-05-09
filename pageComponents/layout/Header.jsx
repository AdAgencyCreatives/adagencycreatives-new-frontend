"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryMenu from "./PrimaryMenu";
import MobileMenu from "./MobileMenu";
import { usePathname } from 'next/navigation';
import "styles/header.css";

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
      className={`header flex items-center justify-between z-30 ${scrolled ? "bg-black/75" : "bg-transparent" } fixed w-full top-0`}
    >
      <Link href="/" className="cursor-pointer">
        <img
          src="/aac-logo-round.png"
          alt="Logo"
          className="logo hover:rotate-45 transition-transform duration-3000"
        />
      </Link>
      <div className="inline-block">
        <MobileMenu isHomePage={true} />
      </div>
    </header>
  );
};

export default Header;
