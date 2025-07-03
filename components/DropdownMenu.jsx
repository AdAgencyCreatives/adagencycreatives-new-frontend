import DropmenuIcon from 'icons/DropmenuIcon';
import React, { useState, useRef, useEffect, createContext } from 'react';
import DropdownMenuContext from 'contexts/DropdownMenuContext';

const DropdownMenu = ({ className = '', dropMenuClassName = '', children }) => {
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
    <div className={`dropdown-container relative flex justify-center items-center leading-none ${className}`} ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <DropmenuIcon />
      </button>

      {isOpen && (
        <div className={[
          "dropdown-menu flex flex-col absolute top-[120%] right-[40%] bg-black outline outline-white z-999997 shadow-(--ad-box-shadow)",
          "max-sm:py-[0.542rem] py-[0.444rem] md:py-[0.542rem] xl:py-[0.593rem] 2xl:py-[0.625rem] 3xl:py-[0.833rem] 4xl:py-[1.111rem]",
          "max-sm:px-[0.867rem] px-[0.711rem] md:px-[0.867rem] xl:px-[0.949rem] 2xl:px-[1rem] 3xl:px-[1.333rem] 4xl:px-[1.778rem]",
          "max-sm:outline-[0.108rem] outline-[0.089rem] md:outline-[0.108rem] xl:outline-[0.119rem] 2xl:outline-[0.125rem] 3xl:outline-[0.167rem] 4xl:outline-[0.222rem]",
          "max-sm:rounded-[0.356rem] rounded-[0.356rem] md:rounded-[0.434rem] xl:rounded-[0.474rem] 2xl:rounded-[0.5rem] 3xl:rounded-[0.667rem] 4xl:rounded-[0.889rem]",
          "max-sm:gap-[0.542rem] gap-[0.444rem] md:gap-[0.542rem] xl:gap-[0.593rem] 2xl:gap-[0.625rem] 3xl:gap-[0.833rem] 4xl:gap-[1.111rem]",
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

export default DropdownMenu;