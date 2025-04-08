import ValidationError from "../errors/ValidationError.js";

/**
 * Sends an error response to the client based on the type of error.
 * 
 * This function differentiates between validation errors (400) and general errors (500), and formats the response accordingly.
 * It provides specific error details when the error is an instance of `ValidationError`, or a generic error message for other types of errors.
 * 
 * @param {Error} error - The error that occurred, can be either a `ValidationError` or a general JavaScript `Error`.
 * @param {Object} res - The Express response object used to send the error response.
 * @throws {void} This function does not return a value but sends an HTTP response.
 */
const errorResponse = (error, res) => {
    console.log(error);

    // Handle ValidationError with a 400 status
    if (error instanceof ValidationError) {
        res.status(400).json({
            errorType: error.type,
            errorName: error.name,
            errorField: error.field,
            errorMessage: error.message
        });

        // Handle general JavaScript errors with a 500 status
    } else if (error instanceof Error) {
        res.status(500).json({
            errorType: "critical",
            errorName: error.name,
            errorMessage: error.message
        });

        // Handle unexpected errors
    } else {
        res.status(500).json({
            errorType: "critical",
            errorName: error.name,
            errorMessage: "Wystąpił nieoczekiwany błąd"
        });
    }
}

export default errorResponse;
