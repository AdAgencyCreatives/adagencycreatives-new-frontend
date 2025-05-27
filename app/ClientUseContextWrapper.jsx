"use client";

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

export default function ClientUseContextWrapper({ children }) {
  // Your context logic here

  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {children}
    </>
  );
}
