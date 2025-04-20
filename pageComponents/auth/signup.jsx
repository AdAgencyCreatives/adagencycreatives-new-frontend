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
import SignOutLink from "../../components/SignOutLink";
import { useRouter } from "next/navigation";

const SignUp = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const router = useRouter();

  const { showAnimatedAlert } = useContext(AnimatedAlertContext);

  const {
    state: { user },
    signup,
  } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setApiResponse(null);
    setLoading(true);
    try {
      await signup(
        values,
        role == "creatives" ? "creative" : "agency",
        (data) => {
          setApiResponse(data);
          setLoading(false);
        }
      );
    } catch (error) {}
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
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-[300px] pb-[150px] relative">
      <PageHeader
        page={role}
        subPage={{ text: "signin", url: `/${role}-signin` }}
        heading="Register"
      />

      {user ? (
        <div className="relative z-999999 flex flex-col justify-center items-center h-[300px] pb-[200px]">
          <span>Welcome! {user?.name || ""}&nbsp;</span>
          <SignOutLink />
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
          />
        </>
      )}
    </div>
  );
};

export default SignUp;
