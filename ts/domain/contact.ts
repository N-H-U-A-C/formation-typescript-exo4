import { Title } from "./title.js";

export default class Contact {
    private title: Title;
    private lastName: string;
    private firstName: string;
    private dateOfBirth: Date;
    private phoneNumber: string;
    private email: string;

    public constructor(title: Title, lastName: string, firstName: string, dateOfBirth: Date, phoneNumber: string, email: string) {
        this.title = title;
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    
    public get getTitle(): Title {
        return this.title;
    }
    public get getLastName(): string {
        return this.lastName;
    }
    public get getFirstName(): string {
        return this.firstName;
    }
    public get getDateOfBirth(): Date {
        return this.dateOfBirth;
    }
    public get getPhoneNumber(): string {
        return this.phoneNumber;
    }
    public get getEmail(): string {
        return this.email;
    }
    
    public get getFullName() : string {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }
    
}