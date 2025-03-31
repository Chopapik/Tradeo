class ValidationError extends Error {
    /**
     * @param {string} field - Field where the error happened (e.g., "password", "email").
     * @param {string} message - Error message describing what went wrong.
     * @param {string} type - Type of error display, default is "inline", can be "critical".
     */
    constructor({ field, message, type }) {
        super(message);
        this.field = field || "";
        this.type = type || "inline";
        this.name = this.constructor.name; // Ustawienie nazwy na "ValidationError"
    }
}

export default ValidationError
