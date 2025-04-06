import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { dbPool } from '../../../config/mysql.config.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    await AuthController.registerUser(req, res)
});


router.post('/login', async (req, res) => {
    await AuthController.loginUser(req, res)
});


export default router;
