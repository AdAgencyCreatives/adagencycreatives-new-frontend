"use client";

import AnimatedForm from "components/AnimatedForm";
import PageHeader from "components/PageHeader";
import {
  registerInitialValues,
  registerSteps,
  registerValidations,
} from "./constants";
import { useState, useContext } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import SignOutLink from "../../components/SignOutLink";

const SignUp = ({ role }) => {
  const [isLoading, setLoading] = useState(false);

  const {
      state: { user },
      signup, logout
    } = useContext(AuthContext);

  const handleSubmit = (values) => {
    console.log("Register:", values);
  };

  return (
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-[200px] relative">
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
        <AnimatedForm
          steps={registerSteps}
          initialValues={registerInitialValues}
          validations={registerValidations}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default SignUp;
