'use client';

import { useEffect, useState } from "react";

const useScreen = () => {

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleUpdates = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setIsMobile(/Mobi|Android/i.test(window.navigator.userAgent));
    setIsPortrait(window.innerHeight > window.innerWidth);
    setIsLandscape(window.innerWidth >= window.innerHeight);
  };

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {

      handleUpdates();

      const handleResize = () => {
        handleUpdates();
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    screenWidth, screenHeight, isMobile, isPortrait, isLandscape,
  };
}

export default useScreen;