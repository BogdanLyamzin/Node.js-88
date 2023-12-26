import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("models", "contacts", "contacts.json");

export async function upateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

export async function listContacts() {
  const contacts = await fs.readFile(contactsPath);

  return JSON.parse(contacts) || null;
}

export async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  return contacts[contactIndex];
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  const [deletedContact] = contacts.splice(contactIndex, 1);
  await upateContacts(contacts);
  return deletedContact;
}

export async function addContact(body) {
  const contacts = await listContacts();
  const { name, email, phone } = body;
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await upateContacts(contacts);
  return newContact;
}

export async function updateContact(body, contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  const contact = contacts[contactIndex];

  const { name = "", email = "", phone = "" } = body;
  if (contact.name !== name && name !== "") {
    contact.name = name;
  }
  if (contact.email !== email && email !== "") {
    contact.email = email;
  }
  if (contact.phone !== phone && phone !== "") {
    contact.phone = phone;
  }

  await upateContacts(contacts);
  return contact;
}
