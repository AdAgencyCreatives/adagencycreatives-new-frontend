// app/ClientComponentWrapper.js
"use client";

import { Provider as AuthProvider } from "contexts/AuthContext";

export default function ClientProviderWrapper({ children }) {

  return <AuthProvider>{children}</AuthProvider>;
}
