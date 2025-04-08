import ValidationError from "../errors/ValidationError.js";
import bcrypt from "bcrypt";

/**
 * Verifies if the provided plain password matches the hashed password.
 *
 * This function compares the plain password entered by the user with the hashed version stored in the database.
 * It uses bcrypt's `compare` function to securely check if the passwords match.
 *
 * @param {string} plainPassword - The plain password entered by the user.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @returns {Promise<boolean>} - Returns a promise that resolves to `true` if the passwords match, otherwise `false`.
 * @throws {ValidationError} - Throws a `ValidationError` if there is an issue during the password comparison.
 */
export const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        const isValid = await bcrypt.compare(plainPassword, hashedPassword);
        return isValid;
    } catch (error) {
        throw new ValidationError({
            type: "critical",
            message: error.message,
        });
    }
};
