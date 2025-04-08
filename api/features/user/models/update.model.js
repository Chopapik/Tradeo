import InputValidator from "./inputValidator.model.js";

/**
 * Model for updating user data with validation methods.
 */
class UpdateDataModel {
    /**
     * Creates a new UpdateDataModel instance.
     * 
     * @param {string|null} name - The user's name.
     * @param {string|null} surname - The user's surname.
     * @param {Date|null} birthDate - The user's birth date.
     * @param {string|null} phoneNumber - The user's phone number.
     */
    constructor(name = null, surname = null, birthDate = null, phoneNumber = null) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;

        // validators
        this.nameValidator = new InputValidator(this.name, 2, 30);
        this.surnameValidator = new InputValidator(this.surname, 2, 30);
    }

    /**
     * Validates the name field.
     * 
     * @returns {boolean} - Returns true if the name is valid (entered, not too short, not too long), false otherwise.
     */
    isValidName() {
        return this.nameValidator.isEntered() && !this.nameValidator.isTooLong() && !this.nameValidator.isTooShort();
    }

    /**
     * Validates the surname field.
     * 
     * @returns {boolean} - Returns true if the surname is valid (entered, not too short, not too long), false otherwise.
     */
    isValidSurname() {
        return this.surnameValidator.isEntered() && !this.surnameValidator.isTooLong() && !this.surnameValidator.isTooShort();
    }

    /**
     * Validates if the given date is a valid Date object or null.
     * 
     * @param {Date|null} date - The date to be validated.
     * @returns {boolean} - Returns true if the date is a valid Date object or null, false otherwise.
     */
    isValidDate(date) {
        return date instanceof Date || date === null;
    }

    /**
     * Validates the phone number format (should be exactly 9 digits).
     * 
     * @param {string} phone - The phone number to be validated.
     * @returns {boolean} - Returns true if the phone number matches the expected format, false otherwise.
     */
    isValidPhoneNumber(phone) {
        const phoneRegex = /^[0-9]{9}$/;
        return phoneRegex.test(phone);
    }
}

export default UpdateDataModel;
