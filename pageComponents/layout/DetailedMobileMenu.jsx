import SignOutLink from "components/SignOutLink";
import Link from "next/link";

/**
 * @param {{ setIsOpen?: import("react").Dispatch<import("react").SetStateAction<boolean>>, user }} props
 */

const DetailedMobileMenu = ({ setIsOpen, user }) => {

  return (
    <nav className="flex flex-col gap-[21px] font-bold relative">
      <Link onClick={() => setIsOpen && setIsOpen(false)}
        href="/faq"
        className="text-[24px] 3xl:text-[32px] 4xl:text-[42px] transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow cursor-pointer"
      >
        faq
      </Link>
    </nav>
  );
};

export default DetailedMobileMenu;