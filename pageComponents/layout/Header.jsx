"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryMenu from "./PrimaryMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-6 px-10 z-30 ${scrolled ? "bg-black/75" : "bg-transparent"
        } fixed w-full top-0`}
    >
      <Link href="/" className="cursor-pointer">
        <img
          src="/aac-logo-header.png"
          alt="Logo"
          className="w-20 h-20 hover:rotate-45 transition-transform duration-3000 border-[3px] border-[solid] border-[white] rounded-[100%]"
        />
      </Link>
      <div className="hidden md:inline-block">
        <PrimaryMenu />
      </div>
      <div className="inline-block md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
