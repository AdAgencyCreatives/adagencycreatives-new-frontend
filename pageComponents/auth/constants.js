import * as Yup from "yup";

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
  Yup.object({ password: Yup.string().min(6, "Min 6 chars").required("Password is required") }),
];

export const registerSteps = [
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

export const registerInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  cpassword: "",
  portfolio_site: "",
};

export const registerValidations = [
  Yup.object({ first_name: Yup.string().required("first name is required") }),
  Yup.object({ last_name: Yup.string().required("last name is required") }),
  Yup.object({ email: Yup.string().email().required("email is required") }),
  Yup.object({ password: Yup.string().min(6).required("password is required") }),
  Yup.object({
    cpassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  }),
  Yup.object({ portfolio_site: Yup.string().required("portfolio site is required") }),
];
