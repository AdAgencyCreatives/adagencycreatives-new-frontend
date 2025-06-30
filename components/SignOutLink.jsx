"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

/**
 * @param {{ placement: string; setIsOpen?: import("react").Dispatch<import("react").SetStateAction<boolean>> }} props
 */
const SignOutLink = ({ placement="", setIsOpen }) => {
  const {
    state: { user },
    logout,
  } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await logout((user) => {
        if (user?.role == "creative") {
          router.push("/creatives-signin");
        } else if ((user?.role == "agency" || user?.role == "advisor" || user?.role == "recruiter")) {
          router.push("/agencies-signin");
        } else {
          router.push("/");
        }
      });

      setIsOpen && setIsOpen(false);
    } catch (error) {}
  };

  return (
    <a
      className={"max-sm:text-[1.05rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] transition delay-150 duration-300 ease-in-out text-white hover:text-primary cursor-pointer" + (placement === "header" ? "" : " underline")}
      onClick={handleSignOut}
    >
      sign out
    </a>
  );
};

export default SignOutLink;
