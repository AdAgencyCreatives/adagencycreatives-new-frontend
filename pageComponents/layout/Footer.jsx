"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({ref, style={}}) => {

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";
  const isCreatives = pathname === "/creatives";
  const isAgencies = pathname === "/agencies";
  const isFAQ = pathname === "/faq";

  if (!isHomePage) {
    return <></>;
  }

  return (
    <>
      {isHomePage ? (
        <footer ref={ref} style={style} className={`max-sm:pt-[24px] max-sm:pb-[24px] max-sm:w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-[78%] md:z-11 bottom-10 text-center text-xs text-gray-400 space-y-1`}>
          <div className="flex justify-between">
            <Link
              href="/jobs-directory"
              className="hidden md:block whitespace-nowrap max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
            >
              search jobs
            </Link>
            <div className="grid place-items-center max-sm:w-full">
              <div className="space-x-4 2xl:space-x-8 3xl:space-x-12 4xl:space-x-16">
                <a href="#" className="font-inter font-bold lowercase max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] leading-[1.33em]">privacy policy</a>
                <a href="#" className="font-inter font-bold lowercase max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] leading-[1.33em]">user agreement</a>
                <a href="#" className="font-inter font-bold lowercase max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] leading-[1.33em]">contact us</a>
              </div>
              <p className="px-4 md:px-0 mt-2 3xl:mt-3 4xl:mt-4 font-inter font-normal capitalize max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
            </div>
            <Link
              href="/creatives-directory"
              className="hidden md:block whitespace-nowrap max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
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