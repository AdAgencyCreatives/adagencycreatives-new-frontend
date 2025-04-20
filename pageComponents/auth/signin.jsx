"use client";

import PageHeader from "components/PageHeader";
import { loginInitialValues, loginSteps, loginValidations } from "./constants";
import AnimatedForm from "components/AnimatedForm";
const { LiaSignInAltSolid } = require("react-icons/lia");
import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

const SignIn = ({ role }) => {
  const [isLoading, setLoading] = useState(false);
  const [signinResponse, setSigninResponse] = useState(null);

  const { signin } = useContext(AuthContext);

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
    }
    if (signinResponse?.type == "error") {
    }
  }, [signinResponse]);

  return (
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-[100px] relative">
      <PageHeader
        page={role}
        subPage={{ text: "register", url: `/${role}-signup` }}
        heading="Sign In"
      />

      <AnimatedForm
        steps={loginSteps}
        initialValues={loginInitialValues}
        validations={loginValidations}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {signinResponse?.type == "success" && (
        <div>
          <h6>Success</h6>
        </div>
      )}
      {signinResponse?.type == "error" && (
        <div>
          <h6>Error</h6>
          <p>{signinResponse?.data?.message}</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
