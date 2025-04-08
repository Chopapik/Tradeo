import bcrypt from "bcrypt";

/**
 * Compares a plain password with a hashed password.
 * 
 * This function uses bcrypt to compare the entered password with a previously hashed password.
 * 
 * @param {string} password - The plain text password entered by the user.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @throws {Error} If there is an issue during the comparison.
 * @returns {Promise<boolean>} Returns `true` if the passwords match, otherwise `false`.
 */
const comparePasswords = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw new Error(`Błąd podczas porównywania haseł: ${error.message}`);
    }
};

export default comparePasswords;
