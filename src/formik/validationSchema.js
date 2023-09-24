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

export const verifySchema = Yup.object().shape({
    code: Yup.string().required("Code is required"),
})

export const productSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    thumbnail: Yup.string().required("Thumbnail is required"),
    shortDescription: Yup.string().required("Short description is required"),
    description: Yup.string().required("Description is required"),
    platform: Yup.string().required("Platform is required"),
    genre: Yup.string().required("Genre is required"),
    price: Yup.number().positive().required("Price is required"),
    quantity: Yup.number().positive().required("Quantity is required"),
})