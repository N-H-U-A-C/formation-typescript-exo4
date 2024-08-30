import Contact from "./domain/contact.js";
import { Title } from "./domain/title.js";
import { addLoadListenerWindow } from "./view/domManipulation.js";
const contact1 = new Contact(Title.Mr, "Smith", "Agent", new Date("1985/01/05"), "+33796584128", "welcome@intothematrix.com");
const contact2 = new Contact(Title.Mme, "Doe", "Jane", new Date("1995/05/05"), "+3367419635", "jane@doe.com");
const contacts = new Array();
contacts.push(contact1, contact2);
console.log("test");
addLoadListenerWindow(contacts);
