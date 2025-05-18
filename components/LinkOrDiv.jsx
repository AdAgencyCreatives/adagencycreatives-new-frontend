'use client';

import Link from "next/link";

const LinkOrDiv = ({ href = '', children, ...props }) => {
    return href?.length > 0 ? <Link href={href} {...props}>{children}</Link> : <div {...props}>{children}</div>;
};

export default LinkOrDiv;