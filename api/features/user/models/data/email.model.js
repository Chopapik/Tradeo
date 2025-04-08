import InputValidator from "./inputValidator.model.js";

/**
 * Model for validating email addresses. Extends the InputValidator base class.
 */
class EmailModel extends InputValidator {
    /**
     * Creates a new EmailModel instance.
     * 
     * @param {string} email - The email address to be validated.
     */
    constructor(email) {
        super(email, 100)
        this.email = email
    }

    /**
     * Checks if the email is in a valid format.
     * 
     * @returns {boolean} - Returns true if the email is valid, false otherwise.
     */
    isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }
}

export default EmailModel
