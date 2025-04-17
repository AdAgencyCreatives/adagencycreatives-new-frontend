'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`flex items-center justify-between py-6 px-10 z-30 ${scrolled ? 'bg-black/50' : 'bg-transparent'} fixed w-full top-0`}>
      <Link href="/" className="cursor-pointer">
        <img src="/aac-logo-header.png" alt="Logo" className="w-20 h-20 hover:rotate-45 transition-transform duration-3000" />
      </Link>
      <nav className="flex gap-6 font-bold">
        <Link href="/faq" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer">faq</Link>
        <Link href="/about" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer">about</Link>
        <Link href="/thelounge" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer">the lounge</Link>
      </nav>
    </header>
  );
}

export default Header;