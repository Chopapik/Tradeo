import { dbPool } from "../../../config/mysql.config.js";
import ValidationError from "../../../errors/ValidationError.js";

/**
 * Repository for interacting with the 'user' table in the database.
 */
class UserRepository {
    /**
     * Retrieves a user from the database by their email address.
     * 
     * @param {string} email - The email address of the user to be retrieved.
     * @returns {Promise<Object[]>} - A promise that resolves to an array of user data objects.
     */
    static async getUserByEmail(email) {
        const [rows] = await dbPool.query("SELECT * FROM user WHERE email=?", [email]);
        return rows;
    }

    /**
     * Creates a new user in the database.
     * 
     * @param {string} email - The email address of the new user.
     * @param {string} hashedPassword - The hashed password for the new user.
     * @returns {Promise<void>} - A promise that resolves when the user is created.
     */
    static async createUser(email, hashedPassword) {
        await dbPool.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);
    }

    /**
     * Updates a user's data in the database.
     * 
     * @param {Object} userData - The updated user data.
     * @param {number} userData.id - The ID of the user to be updated.
     * @param {string|null} userData.name - The user's name.
     * @param {string|null} userData.surname - The user's surname.
     * @param {Date|null} userData.birthDate - The user's birth date.
     * @param {string|null} userData.phoneNumber - The user's phone number.
     * @returns {Promise<void>} - A promise that resolves when the user data is updated.
     */
    static async updateUserData(userData) {
        const { id, name, surname, birthDate, phoneNumber } = userData;

        await dbPool.query(
            "UPDATE user SET name = ?, surname = ?, birthDate = ?, phoneNumber = ? WHERE id = ?",
            [name, surname, birthDate, phoneNumber, id]
        );
    }
}

export default UserRepository;
