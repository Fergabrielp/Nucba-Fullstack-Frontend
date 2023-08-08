import * as Yup from "yup";

const regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/

export const registerSchema = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("repeatPassword")], null)
        .matches(regex, "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long."),
    repeatPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
})

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .matches(regex, "Incorrect password or email"),
})