"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";
  const isCreatives = pathname === "/creatives";
  const isAgencies = pathname === "/agencies";

  if (isCreatives || isAgencies) {
    return <></>;
  }

  return (
    <>
      {isHomePage ? (
        <footer className="max-sm:w-full absolute left-1/2 transform -translate-x-1/2 w-[78%] z-11 bottom-10 text-center text-xs text-gray-400 space-y-1">
          <div className="flex justify-between">
            <Link
              href="/jobs-directory"
              className="hidden md:block text-[19px] xl:text-[21px] 2xl:text-[29px] 4xl:text-[32px] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
            >
              search jobs
            </Link>
            <div>
              <div className="space-x-4 2xl:space-x-8 3xl:space-x-12 4xl:space-x-16">
                <a href="#" className="font-inter font-bold lowercase text-[14px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[32px] transition delay-150 duration-300 ease-in-out text-[#C2C2C2] hover:text-[#FFFFFF] leading-[20px]">privacy policy</a>
                <a href="#" className="font-inter font-bold lowercase text-[14px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[32px] transition delay-150 duration-300 ease-in-out text-[#C2C2C2] hover:text-[#FFFFFF] leading-[20px]">user agreement</a>
                <a href="#" className="font-inter font-bold lowercase text-[14px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[32px] transition delay-150 duration-300 ease-in-out text-[#C2C2C2] hover:text-[#FFFFFF] leading-[20px]">contact us</a>
              </div>
              <p className="px-16 md:px-0 mt-2 3xl:mt-3 4xl:mt-4 font-inter font-normal capitalize text-[14px] 3xl:text-[18] 4xl:text-[24px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
            </div>
            <Link
              href="/creatives-directory"
              className="hidden md:block text-[19px] xl:text-[21px] 2xl:text-[29px] 4xl:text-[32px] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
            >
              hire talent
            </Link>
          </div>
        </footer>
      ) : (
        <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-xs text-gray-400 space-y-1">
          <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives.</p>
        </footer>
      )}
    </>
  );
}

export default Footer;