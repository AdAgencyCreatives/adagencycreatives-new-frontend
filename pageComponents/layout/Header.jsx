"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Context as AuthContext } from "contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import SignOutLink from "../../components/SignOutLink";

const Header = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCreativesPage = pathname === "/creatives";
  const isCreativesDashboard = pathname === "/creatives-dashboard";
  const isCreativesProfile = pathname === "/creatives-profile";
  const isAgenciesPage = pathname === "/agencies";
  const isAgenciesDashboard = pathname === "/agencies-dashboard";
  const isAgenciesProfile = pathname === "/agencies-profile";
  const isJobDirectory = pathname === "/jobs-directory";
  const isCreativesDirectory = pathname === "/creatives-directory";
  const isTheLounge = pathname === "/thelounge";

  const MOST_COMMON_PATHS = ["/", "/creatives-signin", "/creatives-signup", "/agencies-signin", "/agencies-signup", "/thelounge", "/faq", "/about"];

  const [scrolled, setScrolled] = useState(false);

  const {
    state: { user },
  } = useContext(AuthContext);

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
          className="w-20 h-20 hover:rotate-45 transition-transform duration-3000"
        />
      </Link>
      <nav className="flex gap-6 font-bold">
        {/* {!isHomePage && (
          <Link
            href="/"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
          >
            home
          </Link>
        )} */}
        <Link
          href="/faq"
          className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
        >
          faq
        </Link>
        {isTheLounge && (
          <>
            <Link
              href="/creatives"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            >
              creatives
            </Link>
            <Link
              href="/agencies"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            >
              agencies
            </Link>
          </>
        )}
        {MOST_COMMON_PATHS.includes(pathname) && (
          <Link
            href="/about"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
          >
            about
          </Link>
        )}
        {!MOST_COMMON_PATHS.includes(pathname) && (
          <>
            <Link
              href="#"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            >
              search
            </Link>
            {isJobDirectory && (
              <Link
                href="#"
                className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
              >
                featured jobs
              </Link>
            )}
            {isCreativesDirectory && (
              <Link
                href="#"
                className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
              >
                featured creatives
              </Link>
            )}
          </>
        )}
        {!isTheLounge && (
          <Link
            href="/thelounge"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
          >
            the lounge
          </Link>
        )}
        {user && <SignOutLink placement={"header"} />}
      </nav>
    </header>
  );
};

export default Header;
