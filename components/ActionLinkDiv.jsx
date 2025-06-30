'use client';

import Link from "next/link";

const ActionLinkDiv = ({ href = '', onClick = (e) => { }, prevent = false, className = '', children, ...props }) => {
    const handleClick = (e) => {
        if (prevent) {
            e.preventDefault();
            e.stopPropagation();
            onClick(e);
            return false;
        } else {
            onClick(e);
        }
        return true;
    };

    return href?.length > 0 ? <Link href={href} onClick={handleClick} className={`text-white hover:text-primary ${className}`} {...props}>{children}</Link> : <div onClick={handleClick} className={`text-white hover:text-primary ${className}`} {...props}>{children}</div>;
};

export default ActionLinkDiv;