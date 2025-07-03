'use client';

const ActionButton = ({ onClick = (e) => { }, className = '', children, ...props }) => {
    return <div onClick={onClick} className={`text-white hover:text-primary cursor-pointer ${className}`} {...props}>{children}</div>;
};

export default ActionButton;