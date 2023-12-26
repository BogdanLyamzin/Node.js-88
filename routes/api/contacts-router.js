import express from "express";
import * as contactsControllers from "../../controllers/contacts-controllers.js";
import { isEmptyBody, isValid } from "../../middlewares/index.js";
const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", contactsControllers.getByID);

contactsRouter.post(
  "/",
  isEmptyBody,
  isValid.isValidAddContact,
  contactsControllers.add
);

contactsRouter.delete("/:contactId", contactsControllers.deleteByID);

contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  isValid.isValidUpdateContact,
  contactsControllers.updateByID
);

export default contactsRouter;
