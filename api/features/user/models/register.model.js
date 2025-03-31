class RegisterModel {
    constructor(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    arePasswordsMatching() {
        return this.password === this.confirmPassword;
    }

    isPasswordTooShort() {
        return this.password.length < 8;
    }

    isPasswordTooLong() {
        return this.password.length > 40;
    }

    isPasswordValid() {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/;
        return passwordRegex.test(this.password);
    }

    isPasswordEntered() {
        return this.password.trim() !== '';
    }

    isConfirmPasswordEntered() {
        return this.password.trim() !== '';
    }

    isEmailValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    isEmailEntered() {
        return this.email.trim() !== '';
    }

    isEmailTooLong() {
        return this.email.length < 100;
    }

}


export default RegisterModel