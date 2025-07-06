import React, { useState, useRef, useEffect, createContext } from 'react';
import DropdownMenuContext from 'contexts/DropdownMenuContext';

const MobileDropMenu = ({ icon = <></>, className = '', dropMenuClassName = '', children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const hideDropdown = (delay = 0) => {
        window.setTimeout(() => {
            setIsOpen(false);
        }, delay);

    };

    return (
        <div className={`dropdown-container md:relative flex justify-center items-center leading-none ${className}`} ref={dropdownRef}>
            <button
                className={`dropdown-button ${isOpen ? "text-primary" : "text-white"}`}
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {icon}
            </button>

            {isOpen && (
                <div className={[
                    "dropdown-menu flex flex-col absolute max-sm:left-[5%] max-sm:top-[100%] top-[150%] md:right-[40%] bg-black outline outline-white z-999997 shadow-(--ad-box-shadow)",
                    "max-sm:py-[1.301rem] py-[1.067rem] md:py-[1.301rem] xl:py-[1.423rem] 2xl:py-[1.5rem] 3xl:py-[2rem] 4xl:py-[2.667rem]",
                    "max-sm:px-[0.976rem] px-[0.8rem] md:px-[0.976rem] xl:px-[1.067rem] 2xl:px-[1.125rem] 3xl:px-[1.5rem] 4xl:px-[2rem]",
                    "max-sm:outline-[0.108rem] outline-[0.089rem] md:outline-[0.108rem] xl:outline-[0.119rem] 2xl:outline-[0.125rem] 3xl:outline-[0.167rem] 4xl:outline-[0.222rem]",
                    "max-sm:rounded-[0.356rem] rounded-[0.356rem] md:rounded-[0.434rem] xl:rounded-[0.474rem] 2xl:rounded-[0.5rem] 3xl:rounded-[0.667rem] 4xl:rounded-[0.889rem]",
                    "max-sm:gap-[0.542rem] gap-[0.444rem] md:gap-[0.542rem] xl:gap-[0.593rem] 2xl:gap-[0.625rem] 3xl:gap-[0.833rem] 4xl:gap-[1.111rem]",
                    "max-sm:w-[90%] w-[14.222rem] md:w-[17.347rem] xl:w-[18.972rem] 2xl:w-[20rem] 3xl:w-[26.667rem] 4xl:w-[35.556rem]",
                    dropMenuClassName,
                ].join(' ')}>
                    <DropdownMenuContext.Provider value={{ hideDropdown: hideDropdown }}>
                        {children}
                    </DropdownMenuContext.Provider>
                </div>
            )}
        </div>
    );
};

export default MobileDropMenu;