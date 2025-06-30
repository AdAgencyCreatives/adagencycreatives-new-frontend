import DropmenuIcon from 'icons/DropmenuIcon';
import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ className = '', children }) => {
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
          "dropdown-menu flex flex-col absolute top-[120%] right-[40%] bg-black outline outline-white z-999997",
          "max-sm:p-[0.356rem] p-[0.356rem] md:p-[0.434rem] xl:p-[0.474rem] 2xl:p-[0.5rem] 3xl:p-[0.667rem] 4xl:p-[0.889rem]",
          "max-sm:outline-[0.134rem] outline-[0.134rem] md:outline-[0.163rem] xl:outline-[0.178rem] 2xl:outline-[0.188rem] 3xl:outline-[0.251rem] 4xl:outline-[0.334rem]",
          "max-sm:rounded-[0.356rem] rounded-[0.356rem] md:rounded-[0.434rem] xl:rounded-[0.474rem] 2xl:rounded-[0.5rem] 3xl:rounded-[0.667rem] 4xl:rounded-[0.889rem]",
          "max-sm:gap-[0.356rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]",
        ].join(' ')}>
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;