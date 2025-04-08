/**
 * Model for login form data and basic validation.
 */
class LoginModel {
    /**
     * Creates a new LoginModel instance.
     * 
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     * @param {boolean|string} rememberMe - Indicates if the "Remember Me" option is selected.
     */
    constructor(email, password, rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    /**
     * Checks if the password field is filled.
     * 
     * @returns {boolean} - True if password is entered, false otherwise.
     */
    isPasswordEntered() {
        return this.password.trim() !== '';
    }

    /**
     * Checks if the email field is filled.
     * 
     * @returns {boolean} - True if email is entered, false otherwise.
     */
    isEmailEntered() {
        return this.email.trim() !== '';
    }

    /**
     * Checks if the "Remember Me" option is set.
     * 
     * @returns {boolean} - True if "rememberMe" is true or "true", false otherwise.
     */
    isRememberMeSet() {
        return this.rememberMe === true || this.rememberMe === "true";
    }
}

export default LoginModel
