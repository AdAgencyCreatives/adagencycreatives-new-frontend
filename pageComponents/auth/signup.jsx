"use client";

import AnimatedForm from "components/AnimatedForm";
import PageHeader from "components/PageHeader";
import {
  creativeRegisterInitialValues,
  creativeRegisterSteps,
  creativeRegisterValidations,
  agencyRegisterInitialValues,
  agencyRegisterSteps,
  agencyRegisterValidations,
} from "./constants";
import { useState, useContext, useEffect } from "react";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as AuthContext } from "contexts/AuthContext";
import SignOutLink from "components/SignOutLink";
import { useRouter } from "next/navigation";

const SignUp = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const { showAnimatedAlert, hideAnimatedAlert } = useContext(AnimatedAlertContext);

  const {
    state: { user },
    signup,
  } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setApiResponse(null);
    setLoading(true);
    try {
      hideAnimatedAlert();
      await signup(
        values,
        role == "creatives" ? "creative" : "agency",
        (data) => {
          setApiResponse(data);
          setLoading(false);
        }
      );
    } catch (error) { }
  };

  const SuccessMessage = () => {
    return (
      <div>
        Hello,
        <br />
        <br />
        Thank you for successfully registering. You'll receive an email with
        next steps.
        <br />
        <br />
        It could be a few business days for us to verify your registration
        request. Be on the look out for our email.
        <br />
        <br />
        In the meantime, enjoy exploring our home page.
        <br />
        <br />- Ad Agency Creatives
      </div>
    );
  };

  useEffect(() => {
    if (apiResponse?.type == "success") {
      showAnimatedAlert({
        type: "success",
        title: "Sign Up Success",
        message: <SuccessMessage />,
        autoDismiss: false,
        dismissTime: 5000,
      });
    } else if (apiResponse?.type == "error") {
      showAnimatedAlert({
        type: "error",
        title: "Sign Up Failed",
        message: apiResponse?.data?.message || "",
        autoDismiss: false,
        dismissTime: 5000,
      });
    }
  }, [apiResponse]);

  return (
    <div className="flex flex-col justify-center max-sm:gap-[1.5rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem] text-center max-sm:max-w-[85%] max-w-[50%] aspect-square m-auto relative page-sign-up">
      <PageHeader
        page={role}
        subPage={{ text: "signin", url: `/${role}-signin` }}
        heading="Register"
      />
      {user ? (
        <div className="relative z-999998 flex flex-col justify-center items-center">
          <div className={"max-sm:text-[1.05rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white"}>Welcome, {user?.name || ""}&nbsp;</div>
          <SignOutLink placement="" />
        </div>
      ) : (
        <>
          <AnimatedForm
            steps={
              role == "creatives" ? creativeRegisterSteps : agencyRegisterSteps
            }
            initialValues={
              role == "creatives"
                ? creativeRegisterInitialValues
                : agencyRegisterInitialValues
            }
            validations={
              role == "creatives"
                ? creativeRegisterValidations
                : agencyRegisterValidations
            }
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isPasswordVisible={isPasswordVisible}
            setPasswordVisible={setPasswordVisible}
            rememberPassword={rememberPassword}
            setRememberPassword={setRememberPassword}
          />
        </>
      )}
    </div>
  );
};

export default SignUp;
