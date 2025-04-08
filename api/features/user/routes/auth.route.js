import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { dbPool } from '../../../config/mysql.config.js';

const router = express.Router();

/**
 * Registers a new user.
 * 
 * This route handles the POST request for user registration. It uses the 
 * AuthController to process the registration logic.
 * 
 * @route POST /register
 * @param {Request} req - The request object, containing the user registration data.
 * @param {Response} res - The response object, used to send the response back to the client.
 * @returns {void}
 */
router.post('/register', async (req, res) => {
    await AuthController.registerUser(req, res);
});

/**
 * Logs in an existing user.
 * 
 * This route handles the POST request for user login. It uses the AuthController
 * to process the login logic and return a response with the user authentication status.
 * 
 * @route POST /login
 * @param {Request} req - The request object, containing the user's login credentials.
 * @param {Response} res - The response object, used to send the response back to the client.
 * @returns {void}
 */
router.post('/login', async (req, res) => {
    await AuthController.loginUser(req, res);
});

export default router;
