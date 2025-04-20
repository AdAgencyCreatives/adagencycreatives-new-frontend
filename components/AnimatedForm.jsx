"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LiaSignInAltSolid } from "react-icons/lia";
import TailwindCircularLoader from "./TailwindCircularLoader";

const AnimatedForm = ({
  steps,
  initialValues,
  validations,
  onSubmit,
  isLoading,
}) => {
  const [step, setStep] = useState(0);
  const isLastStep = step === steps.length - 1;

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const handleNext = (validateForm) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0)
        setStep((s) => Math.min(steps.length - 1, s + 1));
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validations?.[step]}
      onSubmit={onSubmit}
    >
      {({ validateForm }) => (
        <Form className="flex items-center justify-end max-w-sm mx-auto mb-40 z-2 relative">
          {/* Fields */}
          {steps.map((stepConfig, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out transform ${
                step === index
                  ? "translate-x-0 opacity-100"
                  : step > index
                  ? "-translate-x-full opacity-0 pointer-events-none"
                  : "translate-x-full opacity-0 pointer-events-none"
              }`}
            >
              {stepConfig.fields.map((field) => (
                <div key={field.name}>
                  {/* <label className="block mb-1 text-sm font-medium text-gray-700">
                    {field.label}
                  </label> */}
                  <Field
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-transparent border-b border-white outline-none w-full text-[19px] text-white placeholder-white font-wix py-6 focus:bg-black/50"
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-sm text-red-500 mt-1 font-wix"
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-between relative z-10">
            {step > 0 && (
              <a
                type="button"
                onClick={() => handleBack()}
                className="ml-2 text-white text-[37px] py-6 scale-x-[-1] cursor-pointer"
              >
                <LiaSignInAltSolid />
              </a>
            )}
            {isLastStep ? (
              <button
                type="submit"
                className="ml-2 text-white text-[37px] py-6 cursor-pointer"
              >
                <LiaSignInAltSolid />
              </button>
            ) : (
              <a
                type="button"
                onClick={() => handleNext(validateForm)}
                className="ml-2 text-white text-[37px] py-6 cursor-pointer"
              >
                <LiaSignInAltSolid />
              </a>
            )}
          </div>
          {isLoading && (
            <div className="absolute w-full me-auto">
              <TailwindCircularLoader size={10} />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AnimatedForm;
