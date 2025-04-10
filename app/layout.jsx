import { Wix_Madefor_Text } from "next/font/google";
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
      <head>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"></script>
      </head>
      <body
        className="antialiased"
      >
        <main className="relative w-full min-h-screen bg-black text-white">
          <Header />
          <div className="max-w-full max-w-[1600px] mx-auto px-10 overflow-hidden">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
