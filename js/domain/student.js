export default class Student {
    constructor(firstName, lastName, subjects) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.subjects = subjects;
    }
    get getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get getSubjects() {
        return this.subjects;
    }
    get getSubjectsAverage() {
        return this.subjects.reduce((sum, element) => sum + element.grade, 0) / this.subjects.length;
    }
}
