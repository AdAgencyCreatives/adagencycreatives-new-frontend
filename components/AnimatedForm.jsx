"use client";

import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LiaSignInAltSolid } from "react-icons/lia";
import TailwindCircularLoader from "./TailwindCircularLoader";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { storeValue, readValue, clearValue } from "utils/LocalStorageUtility";

const AnimatedForm = ({
  steps,
  initialValues,
  validations,
  onSubmit,
  isLoading,
  isPasswordVisible,
  setPasswordVisible,
  rememberMe,
  setRememberMe,
}) => {

  const [rememberMeEmail, setRememberMeEmail] = useState("");
  const [step, setStep] = useState(0);
  const isLastStep = step === steps.length - 1;


  useEffect(() => {
    const _email = readValue("email")
    setRememberMeEmail(_email || "");
  }, []);

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

  useEffect(() => {
    // todo: form gets left aligned when focus on next/back
    window.setTimeout(() => {
      // document.querySelector(`#animated-form-field-id-${step}-0`)?.focus();
    }, 500);
  }, [step]);

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
        initialValues={{ ...initialValues, "email": rememberMe && rememberMeEmail ? rememberMeEmail : "" }}
        validationSchema={validations?.[step]}
        onSubmit={onSubmit}
        enableReinitialize={true}
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
            {steps.map((stepConfig, index) => {
              return (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ease-in-out transform max-sm:px-[2.8rem] px-[2.8rem] md:px-[3.415rem] xl:px-[3.735rem] 2xl:px-[3.938rem] 3xl:px-[5.25rem] 4xl:px-[7rem] ${step === index
                    ? "translate-x-0 opacity-100"
                    : step > index
                      ? "-translate-x-full opacity-0 pointer-events-none"
                      : "translate-x-full opacity-0 pointer-events-none"
                    }`}
                >
                  {stepConfig.fields.map((field, field_index) => {
                    console.log(field);
                    return (
                      <div key={field.name || field_index} onKeyDown={handleKeyDown} className="w-full">
                        <div className="relative w-full">
                          <Field
                            ref={(el) => (inputRefs.current[field_index] = el)}
                            id={`animated-form-field-id-${index}-${field_index}`}
                            name={field.name}
                            type={field.type == 'password' ? (isPasswordVisible ? 'text' : field.type) : field.type}
                            placeholder={field.placeholder}
                            className="bg-transparent border-b-2 border-white outline-none w-full max-sm:text-[1.05rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white placeholder-white font-inter py-6 focus:bg-black/50"
                          />
                          {field.type == 'password' && (<>
                            <div className="absolute top-[50%] transform-[translateY(-50%)] max-sm:right-1 right-4">
                              {isPasswordVisible ? (
                                <IoEyeOff className="max-sm:text-[1.5rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem] cursor-pointer text-white hover:text-brand-yellow" onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setPasswordVisible(false);
                                  return false;
                                }} />
                              ) : (
                                <IoEye className="max-sm:text-[1.5rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem] cursor-pointer text-white hover:text-brand-yellow" onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setPasswordVisible(true);
                                  return false;
                                }} />
                              )}
                            </div>
                          </>)}
                        </div>
                        {field.name == 'password' && (
                          <div className="pt-6 inline-flex group items-center max-sm:gap-[0.146rem] gap-[0.4rem] md:gap-[0.488rem] xl:gap-[0.534rem] 2xl:gap-[0.563rem] 3xl:gap-[0.75rem] 4xl:gap-[1rem] max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem]" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setRememberMe(state => !state);
                            return false;
                          }}>
                            {rememberMe ? (
                              <MdOutlineCheckBox className="cursor-pointer max-sm:text-[0.439rem] text-[1.2rem] md:text-[1.464rem] xl:text-[1.601rem] 2xl:text-[1.688rem] 3xl:text-[2.25rem] 4xl:text-[3rem]" />
                            ) : (
                              <MdOutlineCheckBoxOutlineBlank className="cursor-pointer max-sm:text-[0.439rem] text-[1.2rem] md:text-[1.464rem] xl:text-[1.601rem] 2xl:text-[1.688rem] 3xl:text-[2.25rem] 4xl:text-[3rem]" />
                            )}
                            <span className="cursor-pointer select-none">Remember me</span>
                          </div>
                        )}
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-red-500 mt-1 font-inter"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
