import express from "express";
import * as contactsControllers from "../../controllers/contacts-controllers.js";
const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", contactsControllers.getByID);

contactsRouter.post("/", contactsControllers.add);

contactsRouter.delete("/:contactId", contactsControllers.deleteByID);

contactsRouter.put("/:contactId", contactsControllers.updateByID);

export default contactsRouter;
