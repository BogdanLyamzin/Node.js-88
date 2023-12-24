import { HttpError } from "../helpers/HttpError.js";
import * as contactsService from "../models/contacts/index.js";
import {
  addContactSchema,
  updateContactSchema,
} from "../schemas/contacts-schemas.js";

export async function getAll(req, res, next) {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getByID(req, res, next) {
  try {
    const result = await contactsService.getContactById(req.params.contactId);
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
export async function add(req, res, next) {
  try {
    const { error } = addContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error);
    } else {
      const result = await contactsService.addContact(req.body);
      res.status(201).json(result);
    }
  } catch (error) {
    next(error);
  }
}
export async function deleteByID(req, res, next) {
  try {
    const result = await contactsService.removeContact(req.params.contactId);
    if (!result) {
      throw HttpError(404);
    } else {
      res.json({ message: "contact deleted" });
    }
  } catch (error) {
    next(error);
  }
}
export async function updateByID(req, res, next) {
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "missing fields");
    }
    const { error } = updateContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error);
    } else {
      const result = await contactsService.updateContact(
        req.body,
        req.params.contactId
      );
      if (!result) {
        throw HttpError(404);
      } else {
        res.json(result);
      }
    }
  } catch (error) {
    next(error);
  }
}
