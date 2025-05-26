'use client';

import { useEffect, useState } from 'react';

const useHash = () => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateHash = () => {
                setHash(window.location.hash);
            };

            window.addEventListener('hashchange', updateHash);
            updateHash(); // Initial call

            return () => window.removeEventListener('hashchange', updateHash);
        }
    }, []);

    return hash;
};

export default useHash;