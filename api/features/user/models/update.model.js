import InputValidator from "./inputValidator.model.js";

class UpdateDataModel {
    constructor(name = null, surname = null, birthDate = null, phoneNumber = null) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;

        //validators
        this.nameValidator = new InputValidator(this.name, 2, 30);
        this.surnameValidator = new InputValidator(this.surname, 2, 30);
    }

    isValidName() {
        return this.nameValidator.isEntered() && !this.nameValidator.isTooLong() && !this.nameValidator.isTooShort();
    }

    isValidSurname() {
        return this.surnameValidator.isEntered() && !this.surnameValidator.isTooLong() && !this.surnameValidator.isTooShort();
    }

    isValidDate(date) {
        return date instanceof Date || date === null;
    }

    isValidPhoneNumber(phone) {
        const phoneRegex = /^[0-9]{9}$/;
        return phoneRegex.test(phone);
    }
}

export default UpdateDataModel;
