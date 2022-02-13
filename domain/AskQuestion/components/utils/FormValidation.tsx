import * as Yup from "yup";

export const formValidationSchema = new Yup.ObjectSchema({
  userName: Yup.string()
    .matches(/[^0-9]+$/, "Do not use numbers!")
    .required("Required!"),
  phoneNumber: Yup.string()
    .matches(/^\+380/, "Phone number must start with +380")
    .matches(
      /^\+\d{3}[\s -]?(\(\d{2}\)|\d{2})[\s -]?\d{3}[\s -]?\d{2}[\s -]?\d{2}/,
      "Please enter a valid phone number!"
    )
    .required("Required!"),
});
