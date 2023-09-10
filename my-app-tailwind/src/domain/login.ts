import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IFormLoginValues {
    email: string;
    address: {
        city: string;
        code: string;
    };
    age: string;
    username: string;
    password: string;
    confirm_password: string;
    check: string;
}

// ========== SCHEMA =============
export const loginSchema = yup
    .object({
        email: yup.string().required("Nhap email di").matches(new RegExp("@gmail.com"), "sai roi"),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
        confirmPassword: yup
            .string()
            .required("Please confirm your password")
            .oneOf([yup.ref("password")], "Passwords don't match."),
    })
    .required();
