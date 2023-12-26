import express from "express";
import * as contactsControllers from "../../controllers/contacts-controllers.js";
import { isEmptyBody, isValid } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get(
  "/:contactId",
  isValid.isValidID,
  contactsControllers.getByID
);

contactsRouter.post(
  "/",
  isEmptyBody,
  isValid.isValidAddContact,
  contactsControllers.add
);

contactsRouter.delete(
  "/:contactId",
  isValid.isValidID,
  contactsControllers.deleteByID
);

contactsRouter.put(
  "/:contactId",
  isValid.isValidID,
  isEmptyBody,
  isValid.isValidUpdateContact,
  contactsControllers.updateByID
);
contactsRouter.patch(
  "/:contactId/favorite",
  isValid.isValidID,
  isEmptyBody,
  isValid.isValidFavoriteContact,
  contactsControllers.updateStatusContact
);
export default contactsRouter;
