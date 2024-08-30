export default class Contact {
    constructor(title, lastName, firstName, dateOfBirth, phoneNumber, email) {
        this.title = title;
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    get getTitle() {
        return this.title;
    }
    get getLastName() {
        return this.lastName;
    }
    get getFirstName() {
        return this.firstName;
    }
    get getDateOfBirth() {
        return this.dateOfBirth;
    }
    get getPhoneNumber() {
        return this.phoneNumber;
    }
    get getEmail() {
        return this.email;
    }
    get getFullName() {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }
}
