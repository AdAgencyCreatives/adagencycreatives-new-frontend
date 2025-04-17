const Footer = () => {
  return (
    <footer className="absolute left-1/2 transform -translate-x-1/2 w-max z-11 bottom-10 text-center text-xs text-gray-400 space-y-1">
      <div className="space-x-4">
        <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">privacy policy</a>
        <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">user agreement</a>
        <a href="#" className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#424242] hover:text-[#FFFFFF]">contact us</a>
      </div>
      <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} BY AD AGENCY CREATIVES</p>
      <p>This is just a dummy line for testing</p>
    </footer>
  );
}

export default Footer;