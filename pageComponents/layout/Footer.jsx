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
        <footer className="absolute left-1/2 transform -translate-x-1/2 w-[78%] z-11 bottom-10 text-center text-xs text-gray-400 space-y-1">
          <div className="flex justify-between">
            <Link
              href="/jobs-directory"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] 4xl:text-[32px] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
            >
              search jobs
            </Link>
            <div>
              <div className="space-x-4">
                <a href="#" className="font-alta uppercase text-[14px] 2xl:text-[18px] 3xl:text-[26px] 4xl:text-[34.67px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">privacy policy</a>
                <a href="#" className="font-alta uppercase text-[14px] 2xl:text-[18px] 3xl:text-[26px] 4xl:text-[34.67px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">user agreement</a>
                <a href="#" className="font-alta uppercase text-[14px] 2xl:text-[18px] 3xl:text-[26px] 4xl:text-[34.67px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">contact us</a>
              </div>
              <p className="font-alta uppercase text-[16px] xl:text-[26px] 2xl:text-[26px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} BY AD AGENCY CREATIVES.</p>
            </div>
            <Link
              href="/creatives-directory"
              className="text-[19px] xl:text-[21px] 2xl:text-[29px] 4xl:text-[32px] font-bold font-inter transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
            >
              hire talent
            </Link>
          </div>
        </footer>
      ) : (
        <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-xs text-gray-400 space-y-1">
          <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} BY AD AGENCY CREATIVES.</p>
        </footer>
      )}
    </>
  );
}

export default Footer;