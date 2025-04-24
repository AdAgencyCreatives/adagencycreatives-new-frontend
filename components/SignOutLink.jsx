"use client";

import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

const SignOutLink = ({}) => {
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
        } else if (user?.role == "agency") {
          router.push("/agencies-signin");
        } else {
          router.push("/");
        }
      });
    } catch (error) {}
  };

  return (
    <a
      className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] cursor-pointer underline"
      onClick={handleSignOut}
    >
      sign out
    </a>
  );
};

export default SignOutLink;
