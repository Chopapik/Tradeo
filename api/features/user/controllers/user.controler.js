import errorResponse from "../../../utils/errorResponse.js";
import UserService from "../services/user.services.js";

/**
 * Controller for handling user-related operations.
 */
class UserController {
    /**
     * Updates user information such as name, surname, birth date, and phone number.
     * 
     * @param {import("express").Request} req - Express request object with user data in the body.
     * @param {import("express").Response} res - Express response object used to send the result.
     * @returns {Promise<void>} - A Promise that resolves when the user data is updated or rejects on error.
     */
    static async updateUserData(req, res) {
        const userData = {
            id: req.body.id,
            name: req.body.name || null,
            surname: req.body.surname || null,
            birthDate: req.body.birthDate || null,
            phoneNumber: req.body.phoneNumber || null,
        };

        console.log(userData)

        try {
            await UserService.updateUserData(userData);
            res.end();
        } catch (error) {
            errorResponse(error, res);
        }
    }
}

export default UserController;
