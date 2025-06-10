'use client';

import Link from "next/link";

const LinkOrDiv = ({ href = '', className='', children, ...props }) => {
    return href?.length > 0 ? <Link href={href} className={`text-white hover:text-brand-yellow ${className}`} {...props}>{children}</Link> : <div {...props}>{children}</div>;
};

export default LinkOrDiv;