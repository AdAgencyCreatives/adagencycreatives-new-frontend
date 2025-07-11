'use client';

import { useEffect, useRef, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = ({ className = '', input = '', setInput = (value) => { }, placeholder = '', onKeyDown = (e) => { }, name = '', id = '', ref = null, hasFocus = false }) => {

    const passwordInputRef = useRef(ref);
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handlePasswordEyeClick = (e, value) => {
        e.preventDefault();
        e.stopPropagation();
        setPasswordVisible(value);
        if (passwordInputRef?.current) {
            passwordInputRef.current.focus();
            passwordInputRef.current.value = ''; // trick to move cursor to the end, doesn't effect input value
        }
        return false;
    };

    useEffect(() => {
        if (hasFocus) {
            if (passwordInputRef?.current) {
                passwordInputRef.current.focus();
                passwordInputRef.current.value = ''; // trick to move cursor to the end, doesn't effect input value
            }
        }
    }, [hasFocus]);

    return (
        <div className={[
            'flex w-full relative',
        ].join(' ')}
        >
            <input
                type={isPasswordVisible ? "text" : "password"}
                name={name}
                id={id}
                ref={passwordInputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className={[
                    'flex w-full border-b-1 border-white outline-none',
                    'max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]',
                    'max-sm:py-[0.434rem] py-[0.356rem] md:py-[0.434rem] xl:py-[0.474rem] 2xl:py-[0.5rem] 3xl:py-[0.667rem] 4xl:py-[0.889rem]',
                    className,
                    isPasswordVisible ? '' : 'max-sm:tracking-[0.122rem] tracking-[0.1rem] md:tracking-[0.122rem] xl:tracking-[0.134rem] 2xl:tracking-[0.141rem] 3xl:tracking-[0.188rem] 4xl:tracking-[0.251rem]'
                ].join(' ')}
                onKeyDown={onKeyDown}
            />
            <div className="absolute right-0 top-[50%] transform-[translateY(-50%)] flex justify-center items-center max-sm:gap-[0.217rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                {isPasswordVisible ? (
                    <IoEyeOff className="max-sm:text-[1.301rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem] cursor-pointer text-white hover:text-primary" onClick={(e) => handlePasswordEyeClick(e, false)} />
                ) : (
                    <IoEye className="max-sm:text-[1.301rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem] cursor-pointer text-white hover:text-primary" onClick={(e) => handlePasswordEyeClick(e, true)} />
                )}
            </div>
        </div>
    );
}

export default PasswordInput;