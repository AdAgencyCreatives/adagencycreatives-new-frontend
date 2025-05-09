"use client";

import { usePathname } from "next/navigation";
import Footer from "pageComponents/layout/Footer";
import Header from "pageComponents/layout/Header";


export default function LayoutWrapper({ children }) {

    const pathname = usePathname();
    const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home/";

    return (
        <main className={`${isHomePage && "md:flex "}relative w-full min-h-screen bg-black text-white`}>
            <Header />
            <div className={`${isHomePage && "md:flex md:flex-1 "}max-w-full overflow-hidden`}>{children}</div>
            <Footer />
        </main>
    );
}
