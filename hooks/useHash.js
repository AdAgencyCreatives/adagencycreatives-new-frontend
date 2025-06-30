'use client';

import { useEffect, useState } from 'react'

export default function useHash(onHashChange = (hash) => {}) {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash.substring(1));

    // Handler for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setCurrentHash(newHash);
      onHashChange(newHash);
    };

    // Add event listener
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // You can also update the hash programmatically
  const updateHash = (newHash) => {
    window.location.hash = newHash;
    // Note: This will trigger the hashchange event automatically
  };

  return { currentHash, updateHash };
}
