import * as Yup from "yup";

// Add custom password validation method to Yup
Yup.addMethod(Yup.string, 'password', function(message) {
  return this.test('password', message || 'password does not meet requirements', function(value) {
    const { path, createError } = this;
    
    if (!value) return true; // Skip validation if no value
    
    // Password requirements
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 8;
    
    // Check all requirements
    if (!isLongEnough) {
      return createError({ path, message: 'password must be at least 8 characters long' });
    }
    if (!hasUpperCase) {
      return createError({ path, message: 'password must contain at least one uppercase letter' });
    }
    if (!hasLowerCase) {
      return createError({ path, message: 'password must contain at least one lowercase letter' });
    }
    if (!hasNumber) {
      return createError({ path, message: 'password must contain at least one number' });
    }
    if (!hasSpecialChar) {
      return createError({ path, message: 'password must contain at least one special character' });
    }
    
    return true;
  });
});

export const loginSteps = [
  {
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "type your e-mail first" },
    ],
  },
  {
    fields: [
      { name: "password", label: "Password", type: "password", placeholder: "••••••••" },
    ],
  },
];

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidations = [
  Yup.object({ email: Yup.string().email().required("Email is required") }),
  Yup.object({ password: Yup.string().min(8, "password must be at least 8 characters long").required("Password is required") }),
];

export const creativeRegisterSteps = [
  {
    fields: [
      { name: "first_name", label: "First Name", type: "text", placeholder: "type your first name" },
    ],
  },
  {
    fields: [
      { name: "last_name", label: "Last Name", type: "text", placeholder: "type your last name" },
    ],
  },
  {
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "type your e-mail" },
    ],
  },
  {
    fields: [
      { name: "password", label: "Password", type: "password", placeholder: "type your password" },
    ],
  },
  {
    fields: [
      { name: "cpassword", label: "Confirm Password", type: "password", placeholder: "type your confirm password" },
    ],
  },
  {
    fields: [
      { name: "portfolio_site", label: "Portfolio Site", type: "url", placeholder: "type your portfolio site" },
    ],
  },
];

export const creativeRegisterInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  cpassword: "",
  portfolio_site: "",
};

export const creativeRegisterValidations = [
  Yup.object({ first_name: Yup.string().required("first name is required") }),
  Yup.object({ last_name: Yup.string().required("last name is required") }),
  Yup.object({ email: Yup.string().email().required("email is required") }),
  Yup.object({ password: Yup.string().password().required("password is required") }),
  Yup.object({
    cpassword: Yup.string().password()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  }),
  Yup.object({ portfolio_site: Yup.string().required("portfolio site is required") }),
];


export const agencyRegisterSteps = [
  {
    fields: [
      { name: "agency_name", label: "Company Name", type: "text", placeholder: "type your first name" },
    ],
  },
  {
    fields: [
      { name: "first_name", label: "Contact First Name", type: "text", placeholder: "type your contact first name" },
    ],
  },
  {
    fields: [
      { name: "last_name", label: "Contact Last Name", type: "text", placeholder: "type your contact last name" },
    ],
  },
  {
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "type your e-mail" },
    ],
  },
  {
    fields: [
      { name: "password", label: "Password", type: "password", placeholder: "type your password" },
    ],
  },
  {
    fields: [
      { name: "cpassword", label: "Confirm Password", type: "password", placeholder: "type your confirm password" },
    ],
  },
  {
    fields: [
      { name: "linkedin_profile", label: "LinkedIn Profile", type: "url", placeholder: "type your linkedin profile" },
    ],
  },
];

export const agencyRegisterInitialValues = {
  agency_name: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  cpassword: "",
  linkedin_profile: "",
};

export const agencyRegisterValidations = [
  Yup.object({ agency_name: Yup.string().required("company name is required") }),
  Yup.object({ first_name: Yup.string().required("first name is required") }),
  Yup.object({ last_name: Yup.string().required("last name is required") }),
  Yup.object({ email: Yup.string().email().required("email is required") }),
  Yup.object({ password: Yup.string().password().required("password is required") }),
  Yup.object({
    cpassword: Yup.string().password()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  }),
  Yup.object({ linkedin_profile: Yup.string().required("linkedin profile is required") }),
];
