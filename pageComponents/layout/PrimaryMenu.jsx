import SignOutLink from "components/SignOutLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

/**
 * @param {{ setIsOpen?: import("react").Dispatch<import("react").SetStateAction<boolean>> }} props
 */
const PrimaryMenu = ({ setIsOpen }) => {
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

  const {
    state: { user },
  } = useContext(AuthContext);
  
  return (
    <nav className="flex flex-col items-center md:flex-row gap-6 font-bold">
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
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        faq
      </Link>
      {isTheLounge && (
        <>
          <Link
            href="/creatives"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            creatives
          </Link>
          <Link
            href="/agencies"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            agencies
          </Link>
        </>
      )}
      {MOST_COMMON_PATHS.includes(pathname) && (
        <Link
          href="/about"
          className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          about
        </Link>
      )}
      {!MOST_COMMON_PATHS.includes(pathname) && (
        <>
          <Link
            href="#"
            className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            search
          </Link>
          {isJobDirectory && (
            <Link
              href="#"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              featured jobs
            </Link>
          )}
          {isCreativesDirectory && (
            <Link
              href="#"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer"
              onClick={() => setIsOpen && setIsOpen(false)}
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
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          the lounge
        </Link>
      )}
      {user && <SignOutLink placement="header" setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default PrimaryMenu;