/**
 * InputValidator contains basic validation for the input filled by user
 * 
 * @param {string} value - Input's value.
 * @param {number | null} minLength - Minimum acceptable length for the input.
 * @param {number | null} maxLength - Maximum acceptable length for the input.
 */

class InputValidator {
    constructor(value, maxLength = null, minLength = null) {
        this.value = value;
        this.maxLength = maxLength;
        this.minLength = minLength;

    }

    isTooLong() {
        // If maxLength is null, do not check for maximum length
        return this.maxLength !== null && this.value.length > this.maxLength;
    }

    isTooShort() {
        // If minLength is null, do not check for minimum length
        return this.minLength !== null && this.value.length < this.minLength;
    }

    isEntered() {
        return this.value.trim() !== '';
    }

}

export default InputValidator