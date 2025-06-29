// Yup validation schema
import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  referralCode: Yup.string().optional(),
});

export const LogInSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/^\d{4}$/, "PIN must be exactly 4 digits")
    .required("PIN is required"),
});
