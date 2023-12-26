import { HttpError } from "../helpers/index.js";
import {
  addContactSchema,
  updateContactSchema,
} from "../schemas/contacts-schemas.js";

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
export default {
  isValidUpdateContact,
  isValidAddContact,
};
