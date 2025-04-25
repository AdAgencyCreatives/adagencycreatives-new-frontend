import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const SocialItem = ({ item }) => {
  const icons = {
    linkedin: <FaLinkedinIn />,
    twitter: <FaXTwitter />,
    instagram: <FaInstagram />
  }

  return (
    <div>
      <Link href={item.href}>{icons?.[item.label]}</Link>
    </div>
  );
};

export default SocialItem;