'use client';

import PageHeader from "components/PageHeader";
import { loginInitialValues, loginSteps, loginValidations } from "./constants";
import AnimatedForm from "components/AnimatedForm";
const { LiaSignInAltSolid } = require("react-icons/lia");

const SignIn = ({ role }) => {
  
  const handleSubmit = (values) => {
    console.log("Sign In:", values);
  };

  return (
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-40 relative">
      <PageHeader
        page={role}
        subPage={{ text: 'register', url: `/${role}-signup` }}
        heading="Sign In"
      />

      <AnimatedForm
        steps={loginSteps}
        initialValues={loginInitialValues}
        validations={loginValidations}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignIn;