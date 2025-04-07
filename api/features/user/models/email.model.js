import InputValidator from "./inputValidator.model.js";

class EmailModel extends InputValidator {
    constructor(email) {
        super(email, 100)
        this.email = email
    }

    isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

}

export default EmailModel