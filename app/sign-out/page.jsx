"use client"

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../../contexts/AuthContext";
import { redirect } from "next/navigation";

export default function SignOutPage() {
  const {
    logout,
  } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout(() => {
     redirect("/");
    });
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="flex flex-1 justify-center items-center h-[45vh]">
      <h3>Signing out...</h3>
    </div>
  );
}