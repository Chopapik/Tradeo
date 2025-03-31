import { dbPool } from "../../../config/mysql.config.js";
import ValidationError from "../../../errors/ValidationError.js";

class UserService {
    static async getUserByEmail(email) {
        try {
            const [rows] = await dbPool.query("SELECT * FROM user WHERE email=?", [email])
            return rows;

        } catch (error) {
            throw new ValidationError({
                type: "critical",
                message: error.message,
            });
        }

    }
}

export default UserService;