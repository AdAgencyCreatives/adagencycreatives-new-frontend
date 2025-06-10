import Image from 'next/image';
import Link from 'next/link';

const LinkWrapper = ({ href, target='', className = '', children, ...props }) => {
  return (
    <Link target={target} href={href} className={`p-0 m-0 leading-none${className?.length > 0 ? (' ' + className) : ''}`}{...props}>{children}</Link>
  );
};

export default LinkWrapper;