import errorResponse from "../../../utils/errorResponse.js";
import UserService from "../services/user.services.js";

class UserController {
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
