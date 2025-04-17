'use client';

import AnimatedForm from "components/AnimatedForm";
import PageHeader from "components/PageHeader";
import { registerInitialValues, registerSteps, registerValidations } from "./constants";

const SignUp = ({ role }) => {

  const handleSubmit = (values) => {
    console.log("Register:", values);
  };

  return (
    <div className="text-center space-y-6 max-w-[721px] mx-auto pt-[100px] relative">
      <PageHeader
        page={role}
        subPage={{ text: 'signin', url: `/${role}-signin` }}
        heading="Register"
      />

      <AnimatedForm
        steps={registerSteps}
        initialValues={registerInitialValues}
        validations={registerValidations}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUp;