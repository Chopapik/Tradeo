import UserRepository from "../repositories/user.repository.js";

class UserService {
    static async getUserByEmail(email) {
        try {
            return await UserRepository.getUserByEmail(email);
        } catch (error) {
            throw new Error(`Błąd podczas pobierania użytkownika: ${error.message}`);
        }
    }


}

export default UserService;
