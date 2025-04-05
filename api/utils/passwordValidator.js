import ValidationError from "../errors/ValidationError";

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
