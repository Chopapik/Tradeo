import RegisterModel from "../models/register.model.js";
import ValidationError from "../../../errors/ValidationError.js";
import bcrypt from "bcrypt";
import { dbPool } from "../../../config/mysql.config.js";
import UserService from "./user.services.js";

class AuthService {
    static async registerUser(email, password, confirmPassword) {
        const registerModel = new RegisterModel(email, password, confirmPassword);

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

        const result = await UserService.getUserByEmail(email)
        if (result.length > 0) {
            throw new ValidationError({
                field: "email",
                message: "Ten adres e-mail jest za zajęty"
            });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 8);
            await dbPool.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);
        } catch (error) {
            throw new ValidationError({
                type: "critical",
                message: `Błąd serwera przy rejestracji użytkownika: ${error.message}`,
            });
        }
    }
}

export default AuthService;
