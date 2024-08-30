import * as idsHtml from "./domVariable.js";
// CONST
const formContact = document.querySelector(`#${idsHtml.ID_FORM_CONTACT}`);
const inputTitle = document.querySelector(`#${idsHtml.ID_INPUT_TITLE}`);
const inputFirstName = document.querySelector(`#${idsHtml.ID_INPUT_FIRSTNAME}`);
const inputLastName = document.querySelector(`#${idsHtml.ID_INPUT_LASTNAME}`);
const inputDateOfBirth = document.querySelector(`#${idsHtml.ID_INPUT_DATEOFBIRTH}`);
const inputPhoneNumber = document.querySelector(`#${idsHtml.ID_INPUT_PHONENUMBER}`);
const inputEmail = document.querySelector(`#${idsHtml.ID_INPUT_EMAIL}`);
const divContacts = document.querySelector(`#${idsHtml.ID_DIV_CONTACTS}`);
const buttonAdd = document.querySelector(`#${idsHtml.ID_BUTTON_ADD}`);
// EVENTS
export function addLoadListenerWindow(contacts) {
    window.addEventListener("load", (event) => {
        populateDivWithContacts(contacts);
    });
}
buttonAdd.addEventListener("click", (event) => {
    console.log("click");
});
function populateDivWithContacts(contacts) {
    divContacts.innerHTML = "";
    for (const contact of contacts) {
        const button = document.createElement("button");
        button.textContent = contact.getFullName;
        addClickEventButton(button, contacts);
        divContacts.appendChild(button);
    }
}
function addClickEventButton(button, contacts) {
    button.addEventListener("click", (event) => {
        console.log("click");
        populateFormWithContact(button, contacts);
    });
}
function populateFormWithContact(button, contacts) {
    const index = Array.prototype.findIndex.call(divContacts.children, (children) => children === button);
    inputTitle.value = contacts[index].getTitle;
    inputFirstName.value = contacts[index].getFirstName;
    inputLastName.value = contacts[index].getLastName;
    inputDateOfBirth.value = contacts[index].getDateOfBirth.toString();
    inputPhoneNumber.value = contacts[index].getPhoneNumber;
    inputEmail.value = contacts[index].getEmail;
}
