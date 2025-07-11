'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useHash(onHashChange = (hash) => {}) {
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ignoreNextHashChange = useRef(false);

  useEffect(() => {
    // Set initial hash
    // const hash = window.location.hash.substring(1);
    // setCurrentHash(hash);
    // onHashChange(hash);

    // Handler for native hash changes
    const handleHashChange = () => {
      if (ignoreNextHashChange.current) {
        ignoreNextHashChange.current = false;
        return;
      }

      const newHash = window.location.hash.substring(1);
      if (newHash !== currentHash) {
        setCurrentHash(newHash);
        onHashChange(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect for Next.js route changes
  useEffect(() => {
    const newHash = window.location.hash.substring(1);
    if (newHash !== currentHash) {
      ignoreNextHashChange.current = true;
      setCurrentHash(newHash);
      onHashChange(newHash);
    }
  }, [pathname, searchParams]);

  const setHash = (newHash) => {
    if (!newHash) {
      // Remove the hash completely
      history.replaceState(null, '', ' ');
      // Force a scroll to top when hash is removed
      window.scrollTo(0, 0);
      // Update state immediately
      setCurrentHash('');
      onHashChange('');
    } else {
      // Update the hash
      window.location.hash = newHash;
    }
  };

  return { currentHash, setHash };
}