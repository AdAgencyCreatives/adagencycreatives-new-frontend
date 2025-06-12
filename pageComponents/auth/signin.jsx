"use client";

import { useRouter } from "next/navigation";

import PageHeader from "components/PageHeader";
import { loginInitialValues, loginSteps, loginValidations } from "./constants";
import AnimatedForm from "components/AnimatedForm";
const { LiaSignInAltSolid } = require("react-icons/lia");
import { useContext, useEffect, useState } from "react";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as AuthContext } from "contexts/AuthContext";
import SignOutLink from "components/SignOutLink";

const SignIn = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const router = useRouter();

  const { showAnimatedAlert, hideAnimatedAlert } = useContext(AnimatedAlertContext);

  const {
    state: { user },
    signin,
  } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setApiResponse(null);
    setLoading(true);
    try {
      hideAnimatedAlert();
      await signin(values, (data) => {
        setApiResponse(data);
        setLoading(false);
      });
    } catch (error) { }
  };

  useEffect(() => {
    if (apiResponse?.type == "success") {
      // showAnimatedAlert({
      //   type: "success",
      //   title: "Sign In Success",
      //   message: apiResponse?.data?.message || `Redirecting to ${role == "creatives" ? "Creatives Dashboard" : "Agencies Dashboard"}...`,
      //   autoDismiss: true,
      //   dismissTime: 500,
      // });
      router.push(role == "creatives" ? "/creatives-dashboard" : "/agencies-dashboard");
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
    <div className="flex flex-col justify-center max-sm:gap-[1.5rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem] text-center max-sm:max-w-[85%] max-w-[50%] aspect-square m-auto relative page-sign-in">
      <PageHeader
        page={role}
        subPage={{ text: "register", url: `/${role}-signup` }}
        heading="Sign In"
      />
      {user ? (
        <div className="relative z-999998 flex flex-col justify-center items-center">
          <div className={"max-sm:text-[1.05rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white"}>Welcome, {user?.name || ""}&nbsp;</div>
          <SignOutLink placement="" />
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
