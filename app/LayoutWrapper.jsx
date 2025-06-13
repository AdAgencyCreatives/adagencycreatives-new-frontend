"use client";

import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "pageComponents/layout/Footer";
import Header from "pageComponents/layout/Header";
import { Context as SiteContext } from "contexts/SiteContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";

import AnimatedAlert from "components/AnimatedAlert";
import useScreen from "hooks/useScreen";

export default function LayoutWrapper({ children }) {

  const { screenHeight } = useScreen();

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";
  const { state: { body_overflow_hidden } } = useContext(SiteContext);

  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const updateFooterHeight = () => {
      setFooterHeight(footerRef?.current?.offsetHeight || 0);
    }

    // Initial measurement
    updateFooterHeight();

    // Optional: Set up resize observer for responsive elements
    const resizeObserver = new ResizeObserver(updateFooterHeight);
    resizeObserver.observe(footerRef.current);

    // Add window resize listener
    window.addEventListener('resize', updateFooterHeight);

    // Cleanup
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateFooterHeight)
    }
  }, [footerRef.current]);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateContentHeight = () => {
      setContentHeight(contentRef?.current?.offsetHeight || 0);
    }

    // Initial measurement
    updateContentHeight();

    // Optional: Set up resize observer for responsive elements
    const resizeObserver = new ResizeObserver(updateContentHeight);
    resizeObserver.observe(contentRef.current);

    // Add window resize listener
    window.addEventListener('resize', updateContentHeight);

    // Cleanup
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateContentHeight)
    }

  }, [contentRef.current]);

  const {
    state: { animatedAlertData },
  } = useContext(AnimatedAlertContext);

  return (
    <body className={`antialiased ${body_overflow_hidden ? 'overflow-hidden' : ''}`}>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        {animatedAlertData && <AnimatedAlert {...animatedAlertData} />}
        <main className={`${isHomePage && "md:flex"} relative w-full min-h-screen bg-black text-white main`}>
          <Header />
          <div ref={contentRef} className={`${isHomePage && "md:flex md:flex-1"} max-w-full overflow-hidden ${!isHomePage ? 'layout' : ''}`}>{children}</div>
          <Footer ref={footerRef} style={{ paddingTop: (isHomePage && (contentHeight + footerHeight > screenHeight) ? '' : `${screenHeight - contentHeight - footerHeight}px`) }} />
        </main>
      </Suspense>
    </body>
  );
}
