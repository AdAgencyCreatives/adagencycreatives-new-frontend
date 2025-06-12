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
        if (isLastStep) {
          onSubmit && onSubmit();
        } else {
          setStep((s) => Math.min(steps.length - 1, s + 1));
        }
    });
  };

  const inputRefs = useRef([]);
  const nextButtonRef = useRef(null);
  const submitButtonRef = useRef(null);

  const focusOnField = (index) => {
    inputRefs.current[index]?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (step < 1) {
        nextButtonRef.current?.click();
      } else {
        submitButtonRef.current?.click();
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validations?.[step]}
        onSubmit={onSubmit}
      >
        {({ validateForm }) => (
          <Form className="flex items-start justify-between w-full mx-auto relative z-2 group">
            {/* Back Button */}
            <div className="flex justify-between relative z-10 max-sm:opaticy-100 md:opacity-0 md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 ease-in-out">
              {step > 0 && (
                <a
                  type="button"
                  onClick={() => handleBack()}
                  className="text-white max-sm:text-[1.5rem] text-[2.1rem] md:text-[2.561rem] xl:text-[2.801rem] 2xl:text-[2.953rem] 3xl:text-[3.938rem] 4xl:text-[5.25rem] py-6 scale-x-[-1] cursor-pointer"
                >
                  <LiaSignInAltSolid />
                </a>
              )}
            </div>
            {/* Fields */}
            {steps.map((stepConfig, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out transform max-sm:px-[2.8rem] px-[2.8rem] md:px-[3.415rem] xl:px-[3.735rem] 2xl:px-[3.938rem] 3xl:px-[5.25rem] 4xl:px-[7rem] ${step === index
                  ? "translate-x-0 opacity-100"
                  : step > index
                    ? "-translate-x-full opacity-0 pointer-events-none"
                    : "translate-x-full opacity-0 pointer-events-none"
                  }`}
              >
                {stepConfig.fields.map((field, index) => (
                  <div key={field.name || index} onKeyDown={handleKeyDown} className="w-full">
                    {/* <label className="block mb-1 text-sm font-medium text-gray-700">
                    {field.label}
                  </label> */}
                    <Field
                      ref={(el) => (inputRefs.current[index] = el)}
                      name={field.name}
                      type={field.type}
                      placeholder={field.type != "password" ? field.placeholder : ''}
                      className="bg-transparent border-b-2 border-white outline-none w-full max-sm:text-[1.05rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white placeholder-white font-inter py-6 focus:bg-black/50"
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-red-500 mt-1 font-inter"
                    />
                  </div>
                ))}
              </div>
            ))}
            {/* Buttons */}
            <div className="flex justify-between relative z-10">
              {isLastStep ? (
                <button
                  ref={submitButtonRef}
                  type="submit"
                  className="max-sm:text-[1.5rem] text-[2.1rem] md:text-[2.561rem] xl:text-[2.801rem] 2xl:text-[2.953rem] 3xl:text-[3.938rem] 4xl:text-[5.25rem] py-6 cursor-pointer"
                >
                  <LiaSignInAltSolid />
                </button>
              ) : (
                <a
                  ref={nextButtonRef}
                  type="button"
                  onClick={() => handleNext(validateForm)}
                  className="text-white max-sm:text-[1.5rem] text-[2.1rem] md:text-[2.561rem] xl:text-[2.801rem] 2xl:text-[2.953rem] 3xl:text-[3.938rem] 4xl:text-[5.25rem] py-6 cursor-pointer"
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
    </>
  );
};

export default AnimatedForm;
