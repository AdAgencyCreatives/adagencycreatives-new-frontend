import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-10 z-10 relative">
      <Link href="/">
        <img src="/aac-logo-header.png" alt="Logo" className="w-20 h-20 hover:rotate-45 transition-transform duration-5000" />
      </Link>
      <nav className="flex gap-6 font-bold">
        <Link href="/faq" className="text-white hover:text-gray-300">faq</Link>
        <Link href="/about" className="text-white hover:text-gray-300">about</Link>
        <Link href="#" className="text-white hover:text-gray-300">the lounge</Link>
      </nav>
    </header>
  );
}

export default Header;