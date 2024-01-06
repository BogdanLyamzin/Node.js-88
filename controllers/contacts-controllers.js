import { HttpError } from "../helpers/index.js";
import Contact from "../models/Contacts.js";

export async function getAll(req, res, next) {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getByID(req, res, next) {
  try {
    const result = await Contact.findById(req.params.contactId);
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
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
export async function deleteByID(req, res, next) {
  try {
    const result = await Contact.findByIdAndDelete(req.params.contactId);
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
    const result = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body
    );
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
export async function updateStatusContact(req, res, next) {
  try {
    const result = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body
    );
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
