import { isValidObjectId } from "mongoose";
import { HttpError } from "../helpers/index.js";
import {
  addContactSchema,
  updateContactSchema,
  updateFavoriteContactSchema,
} from "../models/Contacts.js";
import { addUserSchema, updateSubscriptionSchema } from "../models/Users.js";

function isValidUpdateContact(req, res, next) {
  const { error } = updateContactSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error);
  } else {
    next();
  }
}
function isValidAddContact(req, res, next) {
  const { error } = addContactSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error);
  } else {
    next();
  }
}
function isValidFavoriteContact(req, res, next) {
  const { error } = updateFavoriteContactSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error);
  } else {
    next();
  }
}
function isValidUserAddBody(req, res, next) {
  const { error } = addUserSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error);
  } else {
    next();
  }
}
function isValidID(req, res, next) {
  if (!isValidObjectId(req.params.contactId)) {
    throw HttpError(400, `${req.params.contactId} not valid ID`);
  } else {
    next();
  }
}
function isValidUpdateSubscription(req, res, next) {
  const { error } = updateSubscriptionSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error);
  } else {
    next();
  }
}
export default {
  isValidUpdateContact,
  isValidAddContact,
  isValidFavoriteContact,
  isValidUserAddBody,
  isValidUpdateSubscription,
  isValidID,
};
