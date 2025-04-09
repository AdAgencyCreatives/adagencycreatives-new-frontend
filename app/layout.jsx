import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "pageComponents/layout/Header";
import Footer from "pageComponents/layout/Footer";


export const metadata = {
  title: "Ad Agency Creatives is a community for advertising creatives.",
  description: "Ad Agency Creatives is a community for advertising creatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
          {/* <spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer> */}
          <Header />
          {children}
          <Footer />
        </main>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"></script>
      </body>
    </html>
  );
}
