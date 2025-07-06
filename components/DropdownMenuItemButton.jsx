import React, { useContext } from 'react';
import DropdownMenuContext from 'contexts/DropdownMenuContext';

const DropdownMenuItemButton = ({ className = '', icon = <></>, text = '', onClick = (e) => { }, showIcon = true }) => {

    const { hideDropdown } = useContext(DropdownMenuContext);

    const handleOnClick = (e) => {
        onClick(e);
        hideDropdown(1000);
    };
    return (
        <div className={`dropdown-item inline-flex items-center cursor-pointer max-sm:gap-[0.178rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem] group text-white max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem] ${className}`} onClick={(e) => handleOnClick(e)}>
            {showIcon && (<span className='group-hover:text-primary'>{icon}</span>)}
            <span className='inline-flex whitespace-nowrap font-bold flex-1 group-hover:text-primary'>{text}</span>
        </div>
    );
};

export default DropdownMenuItemButton;