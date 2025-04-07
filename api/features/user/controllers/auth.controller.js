import createToken from "../../../utils/createToken.js";
import errorResponse from "../../../utils/errorResponse.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    static async registerUser(req, res) {
        const { email, password, confirmPassword, acceptTerms } = req.body;

        try {
            await AuthService.registerUser(email, password, confirmPassword, acceptTerms);
            res.end();
        } catch (error) {
            errorResponse(error, res)
        }
    }

    static async loginUser(req, res) {
        const { email, password, rememberMe } = req.body;

        try {
            const authUserId = await AuthService.loginUser(email, password, rememberMe);
            createToken(res, authUserId, rememberMe)
            res.end();
        } catch (error) {
            errorResponse(error, res)
        }

    }


}

export default AuthController;
