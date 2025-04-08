import express from 'express';

import { dbPool } from '../../../config/mysql.config.js';
import UserController from '../controllers/user.controler.js';

const router = express.Router();

router.post('/update', async (req, res) => {
    await UserController.updateUserData(req, res)
});



export default router;
