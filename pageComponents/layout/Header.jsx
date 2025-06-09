"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from 'next/navigation';
import Image from "next/image";

const Header = () => {

  const [isHovered, setIsHovered] = useState(false);
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
      className={`header flex items-center justify-between ${scrolled ? "bg-black/75" : "bg-transparent"} fixed w-full top-0 z-999999`}
    >
      <Link href="/" className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image width={76} height={76} src="/aac-logo-round.png" alt="Ad Agency Creatives Logo" className={`${isHovered ? '' : ''} logo hover:rotate-45 transition-transform duration-3000`} />
        {/* <Image width={76} height={76} src="/aac-logo-yellow.png" alt="Ad Agency Creatives Logo" className={`${isHovered ? '' : 'hidden'} logo hover:rotate-45 transition-transform duration-3000`} /> */}
      </Link>
      <div className="inline-block">
        <MobileMenu isHomePage={true} />
      </div>
    </header>
  );
};

export default Header;
