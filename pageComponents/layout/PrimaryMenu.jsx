import SignOutLink from "components/SignOutLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

/**
 * @param {{ setIsOpen?: import("react").Dispatch<import("react").SetStateAction<boolean>>, user }} props
 */
const PrimaryMenu = ({ setIsOpen, user }) => {
  const pathname = usePathname();
  const isJobDirectory = pathname === "/jobs-directory";
  const isCreativesDirectory = pathname === "/creatives-directory";
  const isTheLounge = pathname === "/thelounge";

  const MOST_COMMON_PATHS = ["/", "/creatives-signin", "/creatives-signup", "/agencies-signin", "/agencies-signup", "/thelounge", "/faq", "/about"];
  
  return (
    <nav className="flex flex-col gap-[21px] font-bold relative">
      {/* {!isHomePage && (
        <Link
          href="/"
          className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
        >
          home
        </Link>
      )} */}
      <Link
        href="/faq"
        className="text-[24px] 3xl:text-[32px] 4xl:text-[42px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        faq
      </Link>
      {isTheLounge && (
        <>
          <Link
            href="/creatives"
            className="text-[24px] 3xl:text-[32px] 4xl:text-[42px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            creatives
          </Link>
          <Link
            href="/agencies"
            className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            agencies
          </Link>
        </>
      )}
      {MOST_COMMON_PATHS.includes(pathname) && (
        <Link
          href="/about"
          className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          about
        </Link>
      )}
      {!MOST_COMMON_PATHS.includes(pathname) && (
        <>
          <Link
            href="#"
            className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            search
          </Link>
          {isJobDirectory && (
            <Link
              href="#"
              className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              featured jobs
            </Link>
          )}
          {isCreativesDirectory && (
            <Link
              href="#"
              className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
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
          className="text-[24px] 3xl:text-[32px] 4xl:text-[42.67px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
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