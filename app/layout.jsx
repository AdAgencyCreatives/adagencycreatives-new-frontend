import { Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import Header from "pageComponents/layout/Header";
import Footer from "pageComponents/layout/Footer";
import ClientUseContextWrapper from "./ClientUseContextWrapper";
import ClientProviderWrapper from "./ClientProviderWrapper";

export const metadata = {
  title: "Ad Agency Creatives is a community for advertising creatives.",
  description: "Ad Agency Creatives is a community for advertising creatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"
        ></script>
      </head>
      <body className="antialiased">
        <ClientProviderWrapper>
        <ClientUseContextWrapper>
            <main className="relative w-full min-h-screen bg-black text-white">
              <Header />
              <div className="max-w-full overflow-hidden">{children}</div>
              <Footer />
            </main>
          </ClientUseContextWrapper>
        </ClientProviderWrapper>
      </body>
    </html>
  );
}
