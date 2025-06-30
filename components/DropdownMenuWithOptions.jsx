import DropmenuIcon from 'icons/DropmenuIcon';
import React, { useState, useRef, useEffect } from 'react';

const DropdownMenuWithOptions = ({ className = '', options = [] }) => {
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
        <div className="dropdown-menu flex flex-col absolute top-[100%] right-0 bg-black gap-2 p-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item inline-flex items-center gap-2 cursor-pointer group text-white "
              onClick={option.onClick}
            >
              <span className='group-hover:text-primary'>{option.icon}</span>
              <span className='inline-flex whitespace-nowrap flex-1 group-hover:text-primary'>{option.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuWithOptions;