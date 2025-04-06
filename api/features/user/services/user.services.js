import UserRepository from "../repositories/user.repository.js";

class UserService {
    static async getUserByEmail(email) {
        try {
            return await UserRepository.getUserByEmail(email);
        } catch (error) {
            throw new Error(`Błąd podczas pobierania użytkownika: ${error.message}`);
        }
    }

    static async createUser(email, hashedPassword) {
        try {
            return await UserRepository.createUser(email, hashedPassword);
        } catch (error) {
            throw new Error(`Błąd podczas tworzenia użytkownika: ${error.message}`);
        }
    }
}

export default UserService;
