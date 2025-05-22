'use client';

import { useEffect, useRef } from "react";

export const useScrollLoader = (loading, cb = () => { }, containerSelector = '.main') => {
    const callbackFired = useRef(false);

    useEffect(() => {
        const darkContainer = document.querySelector(containerSelector);
        const handleScroll = () => {
            if (callbackFired.current) return;

            const containerRect = darkContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const headerHeight =
                document.querySelector("#top-nav-fixed")?.offsetHeight || 0;

            const visibleHeight = viewportHeight - containerRect.top - headerHeight;

            if (
                visibleHeight >= (darkContainer?.offsetHeight || 0) - 300 &&
                visibleHeight <= (darkContainer?.offsetHeight || 0)
            ) {
                cb();
                callbackFired.current = true;
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, cb]);

    useEffect(() => {
        callbackFired.current = loading;
    }, [loading]);
};
