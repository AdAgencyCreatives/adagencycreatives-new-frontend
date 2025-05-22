import { Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import ClientUseContextWrapper from "./ClientUseContextWrapper";
import ClientProviderWrapper from "./ClientProviderWrapper";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientProviderWrapper>
        <ClientUseContextWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientUseContextWrapper>
      </ClientProviderWrapper>
    </html>
  );
}
