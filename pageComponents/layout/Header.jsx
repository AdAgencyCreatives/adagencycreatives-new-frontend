import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-10 z-10 bg-black/50 sticky top-0">
      <Link href="/">
        <img src="/aac-logo-header.png" alt="Logo" className="w-20 h-20 hover:rotate-45 transition-transform duration-3000" />
      </Link>
      <nav className="flex gap-6 font-bold">
        <Link href="/faq" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">faq</Link>
        <Link href="/about" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">about</Link>
        <Link href="#" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">the lounge</Link>
      </nav>
    </header>
  );
}

export default Header;