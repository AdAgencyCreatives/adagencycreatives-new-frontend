"use client";

import { useRef, useState } from "react";
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

  const inputRefs = useRef([]);

  const focusOnField = (index) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validations?.[step]}
      onSubmit={onSubmit}
    >
      {({ validateForm }) => (
        <Form className="flex items-start justify-between max-w-xl mx-auto mb-40 relative z-2 group">
          {/* Back Button */}
          <div className="flex justify-between relative z-10 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
            {step > 0 && (
              <a
                type="button"
                onClick={() => handleBack()}
                className="text-white text-[37px] py-6 scale-x-[-1] cursor-pointer"
              >
                <LiaSignInAltSolid />
              </a>
            )}
          </div>
          {/* Fields */}
          {steps.map((stepConfig, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out transform px-30  ${
                step === index
                  ? "translate-x-0 opacity-100"
                  : step > index
                  ? "-translate-x-full opacity-0 pointer-events-none"
                  : "translate-x-full opacity-0 pointer-events-none"
              }`}
            >
              {stepConfig.fields.map((field, index) => (
                <div key={field.name}>
                  {/* <label className="block mb-1 text-sm font-medium text-gray-700">
                    {field.label}
                  </label> */}
                  <Field
                    ref={(el) => (inputRefs.current[index] = el)}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-transparent border-b-2 border-white outline-none w-full text-[19px] text-white placeholder-white font-wix py-6 focus:bg-black/50"
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
            <div className="absolute pb-25 w-full me-auto z-20">
              <TailwindCircularLoader size={10} />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AnimatedForm;
