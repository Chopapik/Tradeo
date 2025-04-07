import bcrypt from "bcrypt"

const comparePasswords = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new Error(`Błąd podczas porównywania haseł: ${error.message}`)
    }

}

export default comparePasswords