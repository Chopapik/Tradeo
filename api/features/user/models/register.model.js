import EmailModel from "./email.model.js";
import PasswordModel from "./password.model.js";

class RegisterModel {
    constructor(email, password, confirmPassword, acceptTerms) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.acceptTerms = acceptTerms;

        // validators
        this.emailModel = new EmailModel(email);
        this.passwordModel = new PasswordModel(password, confirmPassword);
    }


    arePasswordsMatching() {
        return this.passwordModel.areMatching();
    }

    isPasswordTooShort() {
        return this.passwordModel.isTooShort();
    }

    isPasswordTooLong() {
        return this.passwordModel.isTooLong();
    }

    isPasswordValid() {
        return this.passwordModel.isValid();
    }

    isPasswordEntered() {
        return this.passwordModel.isEntered();
    }

    isConfirmPasswordEntered() {
        return this.passwordModel.isConfirmPasswordEntered();
    }

    isEmailValid() {
        return this.emailModel.isValid();
    }

    isEmailEntered() {
        return this.emailModel.isEntered();
    }

    isEmailTooLong() {
        return this.emailModel.isTooLong();
    }

    isTermsAccepted() {
        return this.acceptTerms === true || this.acceptTerms === "true";
    }
}

export default RegisterModel;
