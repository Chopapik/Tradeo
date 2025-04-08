import jwt from "jsonwebtoken";

/**
 * Generates a JWT token and sets it as a cookie in the response.
 * 
 * This function creates a JWT token using the user's ID and a secret stored in environment variables.
 * It also sets the token as an HTTP-only cookie in the response, with optional long expiration if `rememberMe` is true.
 * 
 * @param {Object} res - The Express response object to send the cookie.
 * @param {string} userId - The ID of the user, used to create the JWT payload.
 * @param {boolean|string} rememberMe - Determines whether to set a long expiration (365 days) for the cookie. Can be a boolean or string value.
 * @throws {Error} If the secret key is missing in environment variables.
 */
const createToken = (res, userId, rememberMe) => {

    const secret = process.env.TOKEN;

    // Ensure secret is available
    if (!secret) {
        throw new Error("Brak klucza TOKEN w zmiennych środowiskowych.");
    }

    const token = jwt.sign({ userId: userId }, secret);

    const cookieOptions = {
        httpOnly: true, // Protects the cookie from client-side access (JavaScript)
    }

    // If rememberMe is true or the string "true", set a longer expiration for the cookie
    if (rememberMe === "true" || rememberMe === true) {
        cookieOptions.maxAge = 365 * 24 * 60 * 60 * 1000; // 1 year
    }

    res.cookie("jwt", token, cookieOptions);
}

export default createToken;
