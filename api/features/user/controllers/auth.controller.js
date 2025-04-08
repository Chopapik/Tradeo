import createToken from "../../../utils/createToken.js";
import errorResponse from "../../../utils/errorResponse.js";
import AuthService from "../services/auth.service.js";

/**
 * Controller for handling authentication (register and login).
 */
class AuthController {
    /**
     * Registers a new user.
     * 
     * @param {import("express").Request} req - Express request object with email, password, confirmPassword, and acceptTerms in the body.
     * @param {import("express").Response} res - Express response object used to send the result.
     * @returns {Promise<void>} - A Promise that completes when the registration process is done.
     */
    static async registerUser(req, res) {
        const { email, password, confirmPassword, acceptTerms } = req.body;

        try {
            await AuthService.registerUser(email, password, confirmPassword, acceptTerms);
            res.end();
        } catch (error) {
            errorResponse(error, res)
        }
    }

    /**
     * Logs in a user and sends a token if login is successful.
     * 
     * @param {import("express").Request} req - Express request object with email, password, and rememberMe in the body.
     * @param {import("express").Response} res - Express response object used to send the result.
     * @returns {Promise<void>} - A Promise that completes when the login process is done.
     */
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
