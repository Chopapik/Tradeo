import RegisterModel from "../models/register.model.js";
import ValidationError from "../../../errors/ValidationError.js";
import bcrypt from "bcrypt";
import { dbPool } from "../../../config/mysql.config.js";

class AuthService {
    static async registerUser(email, password, confirmPassword) {
        const registerModel = new RegisterModel(email, password, confirmPassword);

        if (!registerModel.arePasswordsMatching()) {
            throw new ValidationError("password", "Hasła się nie zgadzają");
        }

        if (!registerModel.isPasswordEntered()) {
            throw new ValidationError("password", "Nie podano hasła");
        }
        if (!registerModel.isConfirmPasswordEntered()) {
            throw new ValidationError("confirmPassword", "Nie podano hasła");
        }

        if (registerModel.isPasswordTooShort()) {
            throw new ValidationError("password", "Hasło jest za krótkie");
        }
        if (registerModel.isPasswordTooLong()) {
            throw new ValidationError("password", "Hasło jest za długie");
        }
        if (!registerModel.isPasswordValid()) {
            throw new ValidationError("password", "Hasło musi zawierać co najmniej jedną wielką literę, cyfrę i znak specjalny");
        }

        if (!registerModel.isEmailValid()) {
            throw new ValidationError("email", "Niepoprawny format adresu e-mail");
        }
        if (!registerModel.isEmailEntered()) {
            throw new ValidationError("email", "Adres e-mail jest wymagany");
        }
        if (!registerModel.isEmailTooLong()) {
            throw new ValidationError("email", "Adres e-mail jest za długi");
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 8);
            await dbPool.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);

        } catch (error) {
            throw new ValidationError("", `Błąd serwera przy rejestracji użytkownika: ${error.message}`);
        }
    }
}

export default AuthService;
