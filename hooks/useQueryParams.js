'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useQueryParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Memoized function to update multiple params
    const setQueryParams = useCallback(
        (params) => {
            const newParams = new URLSearchParams(searchParams.toString());

            Object.entries(params).forEach(([key, value]) => {
                if (value === null || value === '') {
                    newParams.delete(key);
                } else {
                    newParams.set(key, value);
                }
            });

            router.push(`${pathname}?${newParams.toString()}`);
        },
        [pathname, router, searchParams]
    );

    const getQueryParam = (key) => {
        const params = new URLSearchParams(searchParams);
        return params.get(key) || null;
    };

    const queryParams = searchParams;

    return { queryParams, getQueryParam, setQueryParams };
};

export default useQueryParams;