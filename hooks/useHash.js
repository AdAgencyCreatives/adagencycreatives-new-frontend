'use client';

import { useEffect, useState } from 'react'

export default function useHash() {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    // Set initial hash
    setHash(window.location.hash)

    // Add event listener
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return hash
}
