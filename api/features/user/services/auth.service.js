import RegisterModel from "../models/register.model.js";
import ValidationError from "../../../errors/ValidationError.js";
import bcrypt from "bcrypt";
import { dbPool } from "../../../config/mysql.config.js";
import UserService from "./user.services.js";
// import LoginModel from "../models/login.model.js";
import UserRepository from "../repositories/user.repository.js";
import LoginModel from "../models/login.model.js";
import createToken from "../../../utils/createToken.js";
import comparePasswords from "../../../utils/comparePassword.js";

class AuthService {
    static async registerUser(email, password, confirmPassword, acceptTerms) {
        const registerModel = new RegisterModel(email, password, confirmPassword, acceptTerms);

        if (!registerModel.arePasswordsMatching()) {
            throw new ValidationError({
                field: "password",
                message: "Hasła się nie zgadzają"
            });
        }

        if (!registerModel.isPasswordEntered()) {
            throw new ValidationError({
                field: "password",
                message: "Nie podano hasła"
            });
        }
        if (!registerModel.isConfirmPasswordEntered()) {
            throw new ValidationError({
                field: "confirmPassword",
                message: "Nie podano hasła"
            });
        }

        if (registerModel.isPasswordTooShort()) {
            throw new ValidationError({
                field: "password",
                message: "Hasło jest za krótkie"
            });
        }
        if (registerModel.isPasswordTooLong()) {
            throw new ValidationError({
                field: "password",
                message: "Hasło jest za długie"
            });
        }
        if (!registerModel.isPasswordValid()) {
            throw new ValidationError({
                field: "password",
                message: "Hasło musi zawierać co najmniej jedną wielką literę, cyfrę i znak specjalny"
            });
        }

        if (!registerModel.isEmailEntered()) {
            throw new ValidationError({
                field: "email",
                message: "Nie podano adresu email"
            });
        }

        if (!registerModel.isEmailValid()) {
            throw new ValidationError({
                field: "email",
                message: "Niepoprawny format adresu e-mail"
            });
        }

        if (!registerModel.isEmailTooLong()) {
            throw new ValidationError({
                field: "email",
                message: "Adres e-mail jest za długi"
            });
        }

        if (!registerModel.isTermsAccepted()) {
            throw new ValidationError({
                field: "acceptTerms",
                message: "Należy zaakcpetować regulamin"
            });
        }

        const result = await UserService.getUserByEmail(email)
        if (result.length > 0) {
            throw new ValidationError({
                field: "email",
                message: "Ten adres e-mail jest za zajęty"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        await UserService.createUser(email, hashedPassword);

    }


    static async loginUser(email, password, rememberMe) {
        const loginModel = new LoginModel(email, password, rememberMe);

        if (!loginModel.isPasswordEntered()) {
            throw new ValidationError({
                field: "password",
                message: "Nie podano hasła"
            });
        }


        if (!loginModel.isEmailEntered()) {
            throw new ValidationError({
                field: "email",
                message: "Nie podano adresu email"
            })
        }


        const findUser = await UserService.getUserByEmail(email);

        if (!findUser || findUser.length === 0) {
            throw new ValidationError({
                field: "email",
                message: "zły email"
            })
        }

        const isPasswordsCompare = await comparePasswords(password, findUser[0].password)

        if (!isPasswordsCompare) {
            throw new ValidationError({
                field: "password",
                message: "złe hasło"
            })

        }

        return findUser[0].id
    }

}

export default AuthService;
