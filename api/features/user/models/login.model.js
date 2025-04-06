class LoginModel {
    constructor(email, password, rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    isPasswordEntered() {
        return this.password.trim() !== '';
    }

    isEmailEntered() {
        return this.email.trim() !== '';
    }

    isRememberMeSet() {
        return this.rememberMe === true || this.rememberMe === "true";
    }


}


export default LoginModel