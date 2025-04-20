// app/ClientComponentWrapper.js
"use client";

import { useContext, useEffect } from "react";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as AuthContext } from "contexts/AuthContext";
import AnimatedAlert from "components/AnimatedAlert";

export default function ClientUseContextWrapper({ children }) {
  // Your context logic here
  const {
    state: { animatedAlertData },
  } = useContext(AnimatedAlertContext);
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {animatedAlertData && <AnimatedAlert {...animatedAlertData} />}
      {children}
    </>
  );
}
