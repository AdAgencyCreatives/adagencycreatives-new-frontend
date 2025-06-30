import "css/globals.css";
import "css/pre-loader.css"
import "css/tip-tap-editor.css"
import "css/SearchBar.css";
import "css/style2560.css";
import "css/style1920.css";
import "css/style1440.css";
import "css/style1280.css";
import "css/style375.css";

import "utils/polyfills";
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
        <link rel="preload" href="/fonts/alta/Alta_regular.woff" as="font" type="font/woff" crossOrigin="anonymous" fetchPriority="high" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'AltaRegular';
            src: url('/fonts/alta/Alta_regular.woff') format('woff');
            font-display: block;
          }`}}></style>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"></script>
      </head>
      <ClientProviderWrapper>
        <ClientUseContextWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClientUseContextWrapper>
      </ClientProviderWrapper>
    </html>
  );
}
