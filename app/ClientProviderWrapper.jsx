// app/ClientComponentWrapper.js
"use client";

import { Provider as SiteProvider } from "contexts/SiteContext";
import { Provider as AnimatedAlertProvider } from "contexts/AnimatedAlertContext";
import { Provider as AuthProvider } from "contexts/AuthContext";
import { Provider as AgenciesProvider } from "contexts/AgenciesContext";
import { Provider as CreativesProvider } from "contexts/CreativesContext";
import { Provider as JobsProvider } from "contexts/JobsContext";

export default function ClientProviderWrapper({ children }) {
  return (
    <>
      <SiteProvider>
        <AnimatedAlertProvider>
          <AuthProvider>
            <AgenciesProvider>
              <CreativesProvider>
                <JobsProvider>
                  {children}
                </JobsProvider>
              </CreativesProvider>
            </AgenciesProvider>
          </AuthProvider>
        </AnimatedAlertProvider>
      </SiteProvider>
    </>
  );
}
