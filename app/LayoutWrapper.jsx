"use client";

import { Suspense, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "pageComponents/layout/Footer";
import Header from "pageComponents/layout/Header";
import { Context as SiteContext } from "contexts/SiteContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";

import "css/style2560.css";
import "css/style1920.css";
import "css/style1440.css";
import "css/style1280.css";
import "css/style375.css";
import AnimatedAlert from "components/AnimatedAlert";

export default function LayoutWrapper({ children }) {

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";
  const { state: { body_overflow_hidden } } = useContext(SiteContext);

  const {
    state: { animatedAlertData },
  } = useContext(AnimatedAlertContext);

  return (
    <body className={`antialiased ${body_overflow_hidden ? 'overflow-hidden' : ''}`}>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        {animatedAlertData && <AnimatedAlert {...animatedAlertData} />}
        <main className={`${isHomePage && "md:flex"} relative w-full min-h-screen bg-black text-white main`}>
          <Header />
          <div className={`${isHomePage && "md:flex md:flex-1"} max-w-full overflow-hidden ${!isHomePage ? 'layout' : ''}`}>{children}</div>
          <Footer />
        </main>
      </Suspense>
    </body>
  );
}
