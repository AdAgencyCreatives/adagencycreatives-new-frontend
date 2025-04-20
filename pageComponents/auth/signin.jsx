"use client";

import { useRouter } from "next/navigation";

import PageHeader from "components/PageHeader";
import { loginInitialValues, loginSteps, loginValidations } from "./constants";
import AnimatedForm from "components/AnimatedForm";
const { LiaSignInAltSolid } = require("react-icons/lia");
import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import AnimatedAlert from "components/AnimatedAlert";
import Link from "next/link";
import SignOutLink from "../../components/SignOutLink";

const SignIn = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [signinResponse, setSigninResponse] = useState(null);

  const {
    state: { user },
    signin, logout
  } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (values) => {
    setSigninResponse(null);
    setLoading(true);
    try {
      await signin(values, (data) => {
        setSigninResponse(data);
        setLoading(false);
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (signinResponse?.type == "success") {
      router.push("/");
    } else if (signinResponse?.type == "error") {
    }
  }, [signinResponse]);

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

          {signinResponse?.type == "success" && (
            <AnimatedAlert
              type="success"
              title="Sign In Success"
              message={"Awesome!!!"}
              autoDismiss={true}
              dismissTime={3000}
            />
          )}
          {signinResponse?.type == "error" && (
            <AnimatedAlert
              type="error"
              title="Sign In Failed"
              message={signinResponse?.data?.message || ""}
              autoDismiss={false}
              dismissTime={5000}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SignIn;
