/**
 * The PasswordModel class contains basic validation methods for passwords. 
 * Use it when a password is created or updated.
 * 
 * @class PasswordModel
 * @param {string} password - The base password input.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {string|null} currentPassword - Used only for password updates to verify user authorization to update the password.
 */
import InputValidator from "./inputValidator.model.js";

class PasswordModel extends InputValidator {
    /**
     * Creates an instance of the PasswordModel.
     * 
     * @param {string} password - The base password input.
     * @param {string} confirmPassword - The confirmation of the password.
     * @param {string|null} currentPassword - The current password, used for updates only.
     */
    constructor(password, confirmPassword, currentPassword) {
        super(password, 40, 8); // Validation for password field
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.currentPassword = currentPassword;
    }

    /**
     * Checks if the password and confirmation password match.
     * 
     * @returns {boolean} - Returns true if the password matches the confirmation password, false otherwise.
     */
    areMatching() {
        return this.password === this.confirmPassword;
    }

    /**
     * Validates the password according to the given regex pattern.
     * The password must contain at least one uppercase letter, one digit, and one special character,
     * and must be between 8 and 40 characters long.
     * 
     * @returns {boolean} - Returns true if the password is valid according to the regex, false otherwise.
     */
    isValid() {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/;
        return passwordRegex.test(this.password);
    }

    /**
     * Checks if the confirmation password has been entered.
     * 
     * @returns {boolean} - Returns true if the confirmation password is entered, false otherwise.
     */
    isConfirmPasswordEntered() {
        return this.password.trim() !== '';
    }
}

export default PasswordModel;
