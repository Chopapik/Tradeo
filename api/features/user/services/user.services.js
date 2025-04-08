import UserRepository from "../repositories/user.repository.js";

class UserService {
    /**
     * Retrieves a user by their email.
     * 
     * This method interacts with the UserRepository to fetch the user by their email from the database.
     * 
     * @param {string} email - The email address of the user.
     * @throws {Error} If there is an issue while fetching the user.
     * @returns {Promise<Object>} The user data if the user is found.
     */
    static async getUserByEmail(email) {
        try {
            return await UserRepository.getUserByEmail(email);
        } catch (error) {
            throw new Error(`Błąd podczas pobierania użytkownika: ${error.message}`);
        }
    }

    /**
     * Creates a new user in the system.
     * 
     * This method interacts with the UserRepository to insert the new user's data into the database.
     * 
     * @param {string} email - The email address of the new user.
     * @param {string} hashedPassword - The hashed password of the new user.
     * @throws {Error} If there is an issue while creating the user.
     * @returns {Promise<void>}
     */
    static async createUser(email, hashedPassword) {
        try {
            return await UserRepository.createUser(email, hashedPassword);
        } catch (error) {
            throw new Error(`Błąd podczas tworzenia użytkownika: ${error.message}`);
        }
    }

    /**
     * Updates the user's data.
     * 
     * This method updates user data such as name, surname, birth date, and phone number using the UserRepository.
     * 
     * @param {Object} userData - The updated user data.
     * @param {string} userData.id - The user's unique ID.
     * @param {string} userData.name - The user's new name.
     * @param {string} userData.surname - The user's new surname.
     * @param {string} userData.birthDate - The user's new birth date.
     * @param {string} userData.phoneNumber - The user's new phone number.
     * @throws {Error} If there is an issue while updating the user data.
     * @returns {Promise<void>}
     */
    static async updateUserData(userData) {
        try {
            await UserRepository.updateUserData(userData);
        } catch (error) {
            throw new Error(`Błąd podczas aktualizowania danych użytkownika: ${error.message}`);
        }
    }
}

export default UserService;
