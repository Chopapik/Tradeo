import EmailModel from "../data/email.model.js";
import PasswordModel from "../data/password.model.js";

/**
 * Model for user registration data and validation.
 */
class RegisterModel {
    /**
     * Creates a new RegisterModel instance.
     * 
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     * @param {string} confirmPassword - The user's confirmation password.
     * @param {boolean|string} acceptTerms - Indicates whether the user accepted the terms.
     */
    constructor(email, password, confirmPassword, acceptTerms) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.acceptTerms = acceptTerms;

        // validators
        this.emailModel = new EmailModel(email);
        this.passwordModel = new PasswordModel(password, confirmPassword);
    }

    /**
     * Checks if passwords match.
     * @returns {boolean}
     */
    arePasswordsMatching() {
        return this.passwordModel.areMatching();
    }

    /**
     * Checks if the password is too short.
     * @returns {boolean}
     */
    isPasswordTooShort() {
        return this.passwordModel.isTooShort();
    }

    /**
     * Checks if the password is too long.
     * @returns {boolean}
     */
    isPasswordTooLong() {
        return this.passwordModel.isTooLong();
    }

    /**
     * Validates the password format.
     * @returns {boolean}
     */
    isPasswordValid() {
        return this.passwordModel.isValid();
    }

    /**
     * Checks if the password field is filled.
     * @returns {boolean}
     */
    isPasswordEntered() {
        return this.passwordModel.isEntered();
    }

    /**
     * Checks if the confirm password field is filled.
     * @returns {boolean}
     */
    isConfirmPasswordEntered() {
        return this.passwordModel.isConfirmPasswordEntered();
    }

    /**
     * Validates the email format.
     * @returns {boolean}
     */
    isEmailValid() {
        return this.emailModel.isValid();
    }

    /**
     * Checks if the email field is filled.
     * @returns {boolean}
     */
    isEmailEntered() {
        return this.emailModel.isEntered();
    }

    /**
     * Checks if the email is too long.
     * @returns {boolean}
     */
    isEmailTooLong() {
        return this.emailModel.isTooLong();
    }

    /**
     * Checks if the terms and conditions were accepted.
     * @returns {boolean}
     */
    isTermsAccepted() {
        return this.acceptTerms === true || this.acceptTerms === "true";
    }
}

export default RegisterModel;
