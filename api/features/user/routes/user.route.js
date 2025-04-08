import express from 'express';

import { dbPool } from '../../../config/mysql.config.js';
import UserController from '../controllers/user.controler.js';

const router = express.Router();

/**
 * Updates user data.
 * 
 * This route handles the POST request for updating user data. It uses the 
 * UserController to process the update logic.
 * 
 * @route POST /update
 * @param {Request} req - The request object, containing the user's data to be updated.
 * @param {Response} res - The response object, used to send the response back to the client.
 * @returns {void}
 */
router.post('/update', async (req, res) => {
    await UserController.updateUserData(req, res);
});

export default router;
