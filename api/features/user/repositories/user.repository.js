import { dbPool } from "../../../config/mysql.config.js";
import ValidationError from "../../../errors/ValidationError.js";

class UserRepository {
    static async getUserByEmail(email) {
        const [rows] = await dbPool.query("SELECT * FROM user WHERE email=?", [email]);
        return rows;
    }


    static async createUser(email, hashedPassword) {
        await dbPool.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);
    }
}

export default UserRepository;
