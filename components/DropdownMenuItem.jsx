import DropmenuIcon from 'icons/DropmenuIcon';
import React, { useState, useRef, useEffect } from 'react';

const DropdownMenuItem = ({ className = '', icon = <></>, text = '', onClick = () => { }, showIcon = true }) => {

    return (
        <div className={`dropdown-item inline-flex items-center cursor-pointer max-sm:gap-[0.178rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem] group text-white max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem] ${className}`} onClick={onClick}>
            {showIcon && (<span className='group-hover:text-primary'>{icon}</span>)}
            <span className='inline-flex whitespace-nowrap flex-1 group-hover:text-primary'>{text}</span>
        </div>
    );
};

export default DropdownMenuItem;