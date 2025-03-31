import ValidationError from "../../../errors/ValidationError.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    static async registerUser(req, res) {
        const { email, password, confirmPassword } = req.body;

        try {
            await AuthService.registerUser(email, password, confirmPassword);
            res.end();
        } catch (error) {
            if (error instanceof ValidationError) {
                res.status(400).json({
                    errorType: error.type,
                    errorName: error.name,
                    errorField: error.field,
                    errorMessage: error.message
                });
            } else if (error instanceof Error) {
                res.status(500).json({
                    errorType: "critical",
                    errorName: error.name,
                    errorMessage: error.message
                });
            } else {
                res.status(500).json({
                    errorType: "critical",
                    errorName: error.name,
                    errorMessage: "Wystąpił nieoczekiwany błąd"
                });
            }
        }
    }
}

export default AuthController;
