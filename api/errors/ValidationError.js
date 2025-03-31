class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.field = field
        this.name = this.constructor.name
    }
}

export default ValidationError