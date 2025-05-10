'use client'

import { useState, useRef, useEffect } from 'react'

const DropdownButton = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-none font-wix text-[15px] outline-none flex items-center leading-[26px]"
      >
        {label}
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.657a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="origin-top-right absolute mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect?.(option)
                  setOpen(false)
                }}
                className="block w-full text-left px-6 py-3 text-[18px] text-black font-wix leading-[26px]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
