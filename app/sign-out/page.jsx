"use client"

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../../contexts/AuthContext";

export default function SignOutPage() {
  const {
    state: { logout },
  } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    handleLogout();
  }, []);
  return <></>;
}