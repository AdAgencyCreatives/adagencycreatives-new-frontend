// app/ClientComponentWrapper.js
"use client";

import { Provider as SiteProvider } from "contexts/SiteContext";
import { Provider as AlertProvider } from "contexts/AlertContext";
import { Provider as AnimatedAlertProvider } from "contexts/AnimatedAlertContext";
import { Provider as AuthProvider } from "contexts/AuthContext";
import { Provider as AgenciesProvider } from "contexts/AgenciesContext";
import { Provider as CreativesProvider } from "contexts/CreativesContext";
import { Provider as JobsProvider } from "contexts/JobsContext";
import { Provider as DataProvider } from "contexts/DataContext";
import { Provider as FaqsProvider } from "contexts/FaqsContext";

export default function ClientProviderWrapper({ children }) {
  return (
    <>
      <SiteProvider>
        <AlertProvider>
          <AnimatedAlertProvider>
            <AuthProvider>
              <AgenciesProvider>
                <CreativesProvider>
                  <JobsProvider>
                    <DataProvider>
                      <FaqsProvider>
                        {children}
                      </FaqsProvider>
                    </DataProvider>
                  </JobsProvider>
                </CreativesProvider>
              </AgenciesProvider>
            </AuthProvider>
          </AnimatedAlertProvider>
        </AlertProvider>
      </SiteProvider>
    </>
  );
}
