// app/ClientComponentWrapper.js
"use client";

import { Provider as SiteContext } from "contexts/SiteContext";
import { Provider as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Provider as AuthProvider } from "contexts/AuthContext";

export default function ClientProviderWrapper({ children }) {
  return (
    <>
      <SiteContext>
        <AnimatedAlertContext>
          <AuthProvider>{children}</AuthProvider>
        </AnimatedAlertContext>
      </SiteContext>
    </>
  );
}
