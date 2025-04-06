import ValidationError from "../errors/ValidationError.js";

const errorResponse = (error, res) => {
    if (error instanceof ValidationError) {
        res.status(400).json({
            errorType: error.type,
            errorName: error.name,
            errorField: error.field,
            errorMessage: error.message
        });
    } else if (error instanceof Error) {
        res.status(500).json({
            errorType: "critical",
            errorName: error.name,
            errorMessage: error.message
        });
    } else {
        res.status(500).json({
            errorType: "critical",
            errorName: error.name,
            errorMessage: "Wystąpił nieoczekiwany błąd"
        });
    }
}

export default errorResponse