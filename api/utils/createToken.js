import jwt from "jsonwebtoken"

const createToken = (res, userId, rememberMe) => {

    const secret = process.env.TOKEN;
    const token = jwt.sign({ userId: userId }, secret);

    if (!secret) {
        throw new Error("Brak klucza TOKEN w zmiennych środowiskowych.");
    }


    const cookieOptions = {
        httpOnly: true,
    }


    if (rememberMe) {
        cookieOptions.maxAge = 365 * 24 * 60 * 60 * 1000;
    }

    res.cookie("jwt", token, cookieOptions)

}

export default createToken;