"use client"
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";

  return (
    <>
      {isHomePage ? (
        <footer className="absolute left-1/2 transform -translate-x-1/2 w-max z-11 bottom-10 text-center text-xs text-gray-400 space-y-1">
          <div className="space-x-4">
            <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">privacy policy</a>
            <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">user agreement</a>
            <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">contact us</a>
          </div>
          <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} BY AD AGENCY CREATIVES.</p>
        </footer>
      ) : (
        <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-xs text-gray-400 space-y-1">
          <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} BY AD AGENCY CREATIVES</p>
        </footer>
      )}
    </>
  );
}

export default Footer;