"use client";

import AnimatedForm from "components/AnimatedForm";
import PageHeader from "components/PageHeader";
import {
  registerInitialValues,
  registerSteps,
  registerValidations,
} from "./constants";
import { useState, useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import SignOutLink from "../../components/SignOutLink";
import { useRouter } from "next/navigation";
import AnimatedAlert from "components/AnimatedAlert";

const SignUp = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const router = useRouter();

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

  useEffect(() => {
    if (apiResponse?.type == "success") {
    } else if (apiResponse?.type == "error") {
      
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
            steps={registerSteps}
            initialValues={registerInitialValues}
            validations={registerValidations}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          {apiResponse?.type == "success" && (
            <AnimatedAlert
              type="success"
              title="Sign In Success"
              message={
                <div>
                  Hello,
                  <br />
                  <br />
                  Thank you for successfully registering. You'll receive an
                  email with next steps.
                  <br />
                  <br />
                  It could be a few business days for us to verify your
                  registration request. Be on the look out for our email.
                  <br />
                  <br />
                  In the meantime, enjoy exploring our home page.
                  <br />
                  <br />- Ad Agency Creatives
                </div>
              }
              autoDismiss={false}
              dismissTime={5000}
            />
          )}
          {apiResponse?.type == "error" && (
            <AnimatedAlert
              type="error"
              title="Sign Up Failed"
              message={apiResponse?.data?.message || ""}
              autoDismiss={false}
              dismissTime={5000}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SignUp;
