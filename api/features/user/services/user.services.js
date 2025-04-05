import UserRepository from "../repositories/user.repository.js";


class UserService {
    static async getUserByEmail(email) {
        return await UserRepository.getUserByEmail(email);
    }


}

export default UserService;
