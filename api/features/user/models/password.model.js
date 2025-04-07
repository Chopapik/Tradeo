/**
 * The PasswordModel class contains basic validation methods for passwords. Use it when a password is created or updated.
 * @class PasswordModel
 * @param {string} password - The base password input.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {string|null} currentPassword - Used only for password updates to verify user authorization to update the password.
 */

import InputValidator from "./inputValidator.model.js";

class PasswordModel extends InputValidator {
    constructor(password, confirmPassword, currentPassword) {
        super(password, 40, 8); //validation for password field
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.currentPassword = currentPassword;
    }

    areMatching() {
        return this.password === this.confirmPassword;
    }

    isValid() {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/;
        return passwordRegex.test(this.password);
    }

    isConfirmPasswordEntered() {
        return this.password.trim() !== '';
    }
}

export default PasswordModel