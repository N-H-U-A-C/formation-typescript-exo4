import Contact from "../domain/contact.js";
import * as idsHtml from "./domVariable.js";

// CONST
const formContact = document.querySelector(`#${idsHtml.ID_FORM_CONTACT}`) as HTMLFormElement;
const inputTitle = document.querySelector(`#${idsHtml.ID_INPUT_TITLE}`) as HTMLInputElement;
const inputFirstName = document.querySelector(`#${idsHtml.ID_INPUT_FIRSTNAME}`) as HTMLInputElement;
const inputLastName = document.querySelector(`#${idsHtml.ID_INPUT_LASTNAME}`) as HTMLInputElement;
const inputDateOfBirth = document.querySelector(`#${idsHtml.ID_INPUT_DATEOFBIRTH}`) as HTMLInputElement;
const inputPhoneNumber = document.querySelector(`#${idsHtml.ID_INPUT_PHONENUMBER}`) as HTMLInputElement;
const inputEmail = document.querySelector(`#${idsHtml.ID_INPUT_EMAIL}`) as HTMLInputElement;
const divContacts = document.querySelector(`#${idsHtml.ID_DIV_CONTACTS}`) as HTMLDivElement;
const buttonAdd = document.querySelector(`#${idsHtml.ID_BUTTON_ADD}`) as HTMLButtonElement;

// EVENTS
export function addLoadListenerWindow(contacts: Contact[]) {
    window.addEventListener("load", (event: Event) => {
        populateDivWithContacts(contacts);
      });
}

buttonAdd.addEventListener("click", (event) => {
    console.log("click");
});

function populateDivWithContacts(contacts: Contact[]) {
    divContacts.innerHTML = "";
    for (const contact of contacts) {
        const button: HTMLButtonElement = document.createElement("button");
        button.textContent = contact.getFullName;
        addClickEventButton(button, contacts);
        divContacts.appendChild(button);
    }
}

function addClickEventButton(button: HTMLButtonElement, contacts: Contact[]) {
    button.addEventListener("click", (event: Event) => {
        console.log("click");
        populateFormWithContact(button, contacts);
    })
}

function populateFormWithContact(button: HTMLButtonElement, contacts: Contact[]) {
    const index: number = Array.prototype.findIndex.call(divContacts.children, (children) => children === button);
    inputTitle.value = contacts[index].getTitle;
    inputFirstName.value = contacts[index].getFirstName;
    inputLastName.value = contacts[index].getLastName;
    inputDateOfBirth.value = contacts[index].getDateOfBirth.toString();
    inputPhoneNumber.value = contacts[index].getPhoneNumber;
    inputEmail.value = contacts[index].getEmail;
}