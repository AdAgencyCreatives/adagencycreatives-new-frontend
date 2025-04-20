"use client";

import { useRouter } from "next/navigation";

import PageHeader from "components/PageHeader";
import { loginInitialValues, loginSteps, loginValidations } from "./constants";
import AnimatedForm from "components/AnimatedForm";
const { LiaSignInAltSolid } = require("react-icons/lia");
import { useContext, useEffect, useState } from "react";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as AuthContext } from "contexts/AuthContext";
import AnimatedAlert from "components/AnimatedAlert";
import Link from "next/link";
import SignOutLink from "../../components/SignOutLink";

const SignIn = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const router = useRouter();

  const { showAnimatedAlert } = useContext(AnimatedAlertContext);

  const {
    state: { user },
    signin,
  } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setApiResponse(null);
    setLoading(true);
    try {
      await signin(values, (data) => {
        setApiResponse(data);
        setLoading(false);
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (apiResponse?.type == "success") {
      showAnimatedAlert({
        type: "success",
        title: "Sign In Success",
        message: apiResponse?.data?.message || "Redirecting to The Lounge...",
        autoDismiss: true,
        dismissTime: 1500,
      });
      window.setTimeout(() => {
        router.push("/thelounge");
      }, 1500);
    } else if (apiResponse?.type == "error") {
      showAnimatedAlert({
        type: "error",
        title: "Sign In Failed",
        message: apiResponse?.data?.message || "",
        autoDismiss: false,
        dismissTime: 5000,
      });
    }
  }, [apiResponse]);

  return (
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-[200px] relative">
      <PageHeader
        page={role}
        subPage={{ text: "register", url: `/${role}-signup` }}
        heading="Sign In"
      />
      {user ? (
        <div className="relative z-999999 flex flex-col justify-center items-center h-[300px] pb-[200px]">
          <span>Welcome! {user?.name || ""}&nbsp;</span>
          <SignOutLink />
        </div>
      ) : (
        <>
          <AnimatedForm
            steps={loginSteps}
            initialValues={loginInitialValues}
            validations={loginValidations}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default SignIn;
